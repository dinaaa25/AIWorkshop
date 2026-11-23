/** /calendario/<session-id>.ics */
export default defineEventHandler((event) => {
  const file = getRouterParam(event, 'file') || ''
  const session = sessionById(file.replace(/\.ics$/, ''))

  if (!session) {
    throw createError({ statusCode: 404, statusMessage: 'Capacitación no encontrada.' })
  }

  setResponseHeaders(event, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': `attachment; filename="${session.id}.ics"`,
    'Cache-Control': 'public, max-age=300',
  })

  return sessionIcs(session)
})
