type WaitlistBody = {
  email?: string
  name?: string
  organization?: string
  website?: string
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
