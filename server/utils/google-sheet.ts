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

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'
const SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets'
const HEADERS = ['Timestamp', 'Email', 'Name', 'Organization', 'Source']

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
  const config = getSheetConfig()

  if (config.appsScriptUrl) {
    await appendViaAppsScript(config.appsScriptUrl, entry)
    return
  }

  if (!config.clientEmail || !config.privateKey || !config.sheetId) {
    throw createError({
      statusCode: 503,
      statusMessage: 'La lista de espera aún no está conectada a la hoja de cálculo.',
    })
  }

  await appendViaSheetsApi(config, entry)
}

async function appendViaAppsScript(url: string, entry: WaitlistEntry): Promise<void> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
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
    throw createError({
      statusCode: 409,
      statusMessage: 'Este correo ya está en la lista de espera.',
    })
  }

  if (payload.ok === false) {
    throw createError({
      statusCode: 502,
      statusMessage: payload.error || 'No se pudo actualizar la hoja de cálculo.',
    })
  }
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

async function appendViaSheetsApi(config: SheetConfig, entry: WaitlistEntry): Promise<void> {
  const token = await getAccessToken(config.clientEmail, config.privateKey)
  const encodedRange = encodeURIComponent(config.sheetRange)
  const existing = await sheetsRequest<{ values?: string[][] }>(
    token,
    `${config.sheetId}/values/${encodedRange}`,
  )

  const rows = existing.values || []
  const hasHeader = rows[0]?.[0] === HEADERS[0]
  const emailColumn = hasHeader ? 1 : 0
  const alreadyListed = rows.some((row, index) => {
    if (hasHeader && index === 0) {
      return false
    }
    return String(row[emailColumn] || '').trim().toLowerCase() === entry.email
  })

  if (alreadyListed) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Este correo ya está en la lista de espera.',
    })
  }

  if (rows.length === 0) {
    await sheetsRequest(
      token,
      `${config.sheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        body: JSON.stringify({ values: [HEADERS] }),
      },
    )
  }

  await sheetsRequest(
    token,
    `${config.sheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          entry.email,
          entry.name,
          entry.organization,
          'website',
        ]],
      }),
    },
  )
}
