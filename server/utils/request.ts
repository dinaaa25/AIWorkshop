import type { H3Event } from 'h3'

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimit = new Map<string, { count: number, resetAt: number }>()

export function getClientIp(event: H3Event): string {
  return getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
    || getRequestHeader(event, 'x-real-ip')
    || 'local'
}

export function assertRateLimit(ip: string): void {
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

export function clean(value: unknown, maxLength: number): string {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength)
}
