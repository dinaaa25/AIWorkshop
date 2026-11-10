export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': 'attachment; filename="capacitacion-agentes.ics"',
    'Cache-Control': 'public, max-age=300',
  })

  return agentesTrainingIcs()
})
