/** Legacy calendar link: always serves the next (or most recent) agentes session. */
export default defineEventHandler((event) => {
  const session = nextSession('agentes') ?? pastSessions('agentes')[0]

  if (!session) {
    throw createError({ statusCode: 404, statusMessage: 'Sin fechas programadas.' })
  }

  setResponseHeaders(event, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': `attachment; filename="${session.id}.ics"`,
    'Cache-Control': 'public, max-age=300',
  })

  return sessionIcs(session)
})
