type LegacyBody = {
  email?: string
  website?: string
}

/** Kept for pages cached before the /cursos move: signs up for the next agentes session (or its waitlist). */
export default defineEventHandler(async (event) => {
  assertRateLimit(getClientIp(event))

  const body = await readBody<LegacyBody>(event).catch(() => ({} as LegacyBody))

  if (body.website) {
    return { ok: true, duplicate: false }
  }

  const email = clean(body.email, 160).toLowerCase()

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Ingrese un correo válido.' })
  }

  if (!isSheetsConfigured('claudeTraining')) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Las inscripciones aún no están conectadas a la hoja de cálculo.',
    })
  }

  const sessionId = nextSession('agentes')?.id ?? waitlistId('agentes')
  const { duplicate } = await appendCourseEntry(email, sessionId)

  return { ok: true, duplicate, sessionId }
})
