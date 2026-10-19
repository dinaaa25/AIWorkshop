import { JWT } from 'google-auth-library'

export type WaitlistEntry = {
  email: string
  name: string
  organization: string
}

type SheetConfig = {
  sheetId: string
  clientEmail: string
  privateKey: string
  appsScriptUrl: string
  sheetRange: string
}

type SheetRow = {
  /** Tab name. When omitted, the first tab and `sheetRange` are used. */
  tab?: string
  headers: string[]
  email: string
  values: string[]
  /** Body sent to the Apps Script web app. */
  payload: Record<string, string>
}

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'
const SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets'
const WAITLIST_HEADERS = ['Timestamp', 'Email', 'Name', 'Organization', 'Source']
export const CLAUDE_TRAINING_TAB = 'Claude Training'
const CLAUDE_TRAINING_HEADERS = ['Timestamp', 'Email', 'Source']

function getSheetConfig(): SheetConfig {
  const config = useRuntimeConfig()

  return {
    sheetId: String(config.googleSheetId || ''),
    clientEmail: String(config.googleClientEmail || ''),
    privateKey: String(config.googlePrivateKey || '').replace(/\\n/g, '\n'),
    appsScriptUrl: String(config.googleAppsScriptUrl || ''),
    sheetRange: String(config.googleSheetRange || 'A:E'),
  }
}

export function isSheetsConfigured(): boolean {
  const config = getSheetConfig()
  return Boolean(config.appsScriptUrl)
    || Boolean(config.clientEmail && config.privateKey && config.sheetId)
}

export async function appendWaitlistEntry(entry: WaitlistEntry): Promise<void> {
  const { duplicate } = await appendRow({
    headers: WAITLIST_HEADERS,
    email: entry.email,
    values: [entry.email, entry.name, entry.organization, 'website'],
    payload: entry,
  })

  if (duplicate) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Este correo ya está en la lista de espera.',
    })
  }
}

export async function appendClaudeTrainingEntry(email: string): Promise<{ duplicate: boolean }> {
  return await appendRow({
    tab: CLAUDE_TRAINING_TAB,
    headers: CLAUDE_TRAINING_HEADERS,
    email,
    values: [email, 'claude-training'],
    payload: { email, sheet: CLAUDE_TRAINING_TAB },
  })
}

async function appendRow(row: SheetRow): Promise<{ duplicate: boolean }> {
  const config = getSheetConfig()

  if (config.appsScriptUrl) {
    return await appendViaAppsScript(config.appsScriptUrl, row)
  }

  if (!config.clientEmail || !config.privateKey || !config.sheetId) {
    throw createError({
      statusCode: 503,
      statusMessage: 'El formulario aún no está conectado a la hoja de cálculo.',
    })
  }

  return await appendViaSheetsApi(config, row)
}

async function appendViaAppsScript(url: string, row: SheetRow): Promise<{ duplicate: boolean }> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(row.payload),
    redirect: 'follow',
  })

  if (!response.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'No se pudo actualizar la hoja de cálculo. Inténtelo de nuevo en breve.',
    })
  }

  const payload = await response.json().catch(() => ({})) as { ok?: boolean, duplicate?: boolean, error?: string }

  if (payload.duplicate) {
    return { duplicate: true }
  }

  if (payload.ok === false) {
    throw createError({
      statusCode: 502,
      statusMessage: payload.error || 'No se pudo actualizar la hoja de cálculo.',
    })
  }

  return { duplicate: false }
}

async function getAccessToken(email: string, key: string): Promise<string> {
  const jwt = new JWT({
    email,
    key,
    scopes: [SHEETS_SCOPE],
  })

  const tokens = await jwt.authorize()

  if (!tokens.access_token) {
    throw new Error('Google authorization failed.')
  }

  return tokens.access_token
}

async function sheetsRequest<T>(
  token: string,
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${SHEETS_API}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  })

  if (!response.ok) {
    const details = await response.text()
    console.error('Google Sheets API error', response.status, details)
    throw createError({
      statusCode: 502,
      statusMessage: 'No se pudo actualizar la hoja de cálculo. Inténtelo de nuevo en breve.',
    })
  }

  return await response.json() as T
}

async function ensureTab(token: string, sheetId: string, tab: string): Promise<void> {
  const spreadsheet = await sheetsRequest<{ sheets?: { properties?: { title?: string } }[] }>(
    token,
    `${sheetId}?fields=sheets.properties.title`,
  )

  if (spreadsheet.sheets?.some(sheet => sheet.properties?.title === tab)) {
    return
  }

  await sheetsRequest(token, `${sheetId}:batchUpdate`, {
    method: 'POST',
    body: JSON.stringify({ requests: [{ addSheet: { properties: { title: tab } } }] }),
  })
}

async function appendViaSheetsApi(config: SheetConfig, row: SheetRow): Promise<{ duplicate: boolean }> {
  const token = await getAccessToken(config.clientEmail, config.privateKey)

  if (row.tab) {
    await ensureTab(token, config.sheetId, row.tab)
  }

  const range = row.tab ? `'${row.tab}'!A:${String.fromCharCode(64 + row.headers.length)}` : config.sheetRange
  const encodedRange = encodeURIComponent(range)
  const existing = await sheetsRequest<{ values?: string[][] }>(
    token,
    `${config.sheetId}/values/${encodedRange}`,
  )

  const rows = existing.values || []
  const hasHeader = rows[0]?.[0] === row.headers[0]
  const emailColumn = hasHeader ? 1 : 0
  const alreadyListed = rows.some((existingRow, index) => {
    if (hasHeader && index === 0) {
      return false
    }
    return String(existingRow[emailColumn] || '').trim().toLowerCase() === row.email
  })

  if (alreadyListed) {
    return { duplicate: true }
  }

  const appendPath = `${config.sheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`

  if (rows.length === 0) {
    await sheetsRequest(token, appendPath, {
      method: 'POST',
      body: JSON.stringify({ values: [row.headers] }),
    })
  }

  await sheetsRequest(token, appendPath, {
    method: 'POST',
    body: JSON.stringify({ values: [[new Date().toISOString(), ...row.values]] }),
  })

  return { duplicate: false }
}
