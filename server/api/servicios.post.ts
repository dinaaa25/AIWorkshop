type ServiciosBody = {
  email?: string
  name?: string
  organization?: string
  proceso?: string
  website?: string
}

export default defineEventHandler(async (event) => {
  const ip = getClientIp(event)
  assertRateLimit(ip)

  const body = await readBody<ServiciosBody>(event).catch(() => ({} as ServiciosBody))

  // Honeypot: bots fill the hidden "website" field.
  if (body.website) {
    return { ok: true }
  }

  const email = clean(body.email, 160).toLowerCase()
  const name = clean(body.name, 120)
  const organization = clean(body.organization, 160)
  const proceso = clean(body.proceso, 1000)

  if (!EMAIL_PATTERN.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ingrese un correo profesional válido.',
    })
  }

  if (!isSheetsConfigured('servicios')) {
    throw createError({
      statusCode: 503,
      statusMessage: 'El formulario aún no está conectado. Escríbanos directamente por correo.',
    })
  }

  await appendServiciosLead({ email, name, organization, proceso })

  return { ok: true }
})
