type CursoBody = {
  email?: string
  sessionId?: string
  website?: string
}

/** Free course signup. The session id (e.g. claude-2026-12-03) is stored as the sheet's Event. */
export default defineEventHandler(async (event) => {
  const ip = getClientIp(event)
  assertRateLimit(ip)

  const body = await readBody<CursoBody>(event).catch(() => ({} as CursoBody))

  // Honeypot: bots fill the hidden "website" field.
  if (body.website) {
    return { ok: true, duplicate: false }
  }

  const email = clean(body.email, 160).toLowerCase()
  const sessionId = clean(body.sessionId, 80)

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Ingrese un correo válido.' })
  }

  const session = sessionById(sessionId)
  const waitlistCourse = parseWaitlistId(sessionId)

  if (!waitlistCourse && !session) {
    throw createError({ statusCode: 400, statusMessage: 'Esta capacitación no existe.' })
  }

  if (session && isPast(session)) {
    throw createError({ statusCode: 410, statusMessage: 'Esta capacitación ya se realizó. Inscríbase en la próxima fecha.' })
  }

  if (!isSheetsConfigured('claudeTraining')) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Las inscripciones aún no están conectadas a la hoja de cálculo.',
    })
  }

  const { duplicate } = await appendCourseEntry(email, sessionId)

  return { ok: true, duplicate, sessionId }
})
