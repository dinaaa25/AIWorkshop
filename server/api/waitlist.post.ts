type WaitlistBody = {
  email?: string
  name?: string
  organization?: string
  website?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimit = new Map<string, { count: number, resetAt: number }>()

function getClientIp(event: Parameters<typeof getRequestHeader>[0]): string {
  return getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
    || getRequestHeader(event, 'x-real-ip')
    || 'local'
}

function assertRateLimit(ip: string): void {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const current = rateLimit.get(ip)

  if (!current || current.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs })
    return
  }

  current.count += 1

  if (current.count > 8) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Demasiados intentos. Inténtelo de nuevo en unos minutos.',
    })
  }
}

function clean(value: unknown, maxLength: number): string {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength)
}

export default defineEventHandler(async (event) => {
  const ip = getClientIp(event)
  assertRateLimit(ip)

  const body = await readBody<WaitlistBody>(event).catch(() => ({} as WaitlistBody))

  if (body.website) {
    return { ok: true }
  }

  const email = clean(body.email, 160).toLowerCase()
  const name = clean(body.name, 120)
  const organization = clean(body.organization, 160)

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ingrese un correo profesional válido.',
    })
  }

  if (!isSheetsConfigured()) {
    throw createError({
      statusCode: 503,
      statusMessage: 'La lista de espera aún no está conectada a la hoja de cálculo.',
    })
  }

  await appendWaitlistEntry({ email, name, organization })

  return { ok: true }
})
