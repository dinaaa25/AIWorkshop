type ClaudeTrainingBody = {
  email?: string
  website?: string
}

export default defineEventHandler(async (event) => {
  const ip = getClientIp(event)
  assertRateLimit(ip)

  const body = await readBody<ClaudeTrainingBody>(event).catch(() => ({} as ClaudeTrainingBody))

  if (body.website) {
    return { ok: true, duplicate: false }
  }

  const email = clean(body.email, 160).toLowerCase()

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ingrese un correo válido.',
    })
  }

  if (!isSheetsConfigured()) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Las inscripciones aún no están conectadas a la hoja de cálculo.',
    })
  }

  const { duplicate } = await appendClaudeTrainingEntry(email)

  return { ok: true, duplicate }
})
