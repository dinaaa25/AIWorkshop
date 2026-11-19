export const agentesTraining = {
  title: 'Capacitación gratuita de Agentes',
  description:
    'Capacitación gratuita de 45 minutos sobre agentes: qué es la IA agéntica, cómo se hacen, Grok Bot, equipos de agentes, ventas, finanzas y skills.',
  /** Paste the Google Meet link here when it is ready. */
  meetUrl: 'https://meet.google.com/cef-yyxo-mey',
  /** Thursday 19 November 2026, 18:30–19:15 America/Guatemala (UTC−6, no daylight saving). */
  startUtc: '2026-11-20T00:30:00Z',
  endUtc: '2026-11-20T01:15:00Z',
  timeZone: 'America/Guatemala',
  dateLabel: 'Jueves 19 de noviembre',
  timeLabel: '18:30 – 19:15',
  timeZoneLabel: 'hora de Guatemala',
  icsPath: '/capacitacion-agentes.ics',
}

function compactUtc(iso: string): string {
  return iso.replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function calendarDetails(): string {
  const meet = agentesTraining.meetUrl
    ? `\n\nUnirse por Google Meet: ${agentesTraining.meetUrl}`
    : '\n\nPor Google Meet.'
  return `${agentesTraining.description}${meet}`
}

function calendarLocation(): string {
  return agentesTraining.meetUrl || 'Google Meet'
}

export function agentesGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: agentesTraining.title,
    dates: `${compactUtc(agentesTraining.startUtc)}/${compactUtc(agentesTraining.endUtc)}`,
    details: calendarDetails(),
    location: calendarLocation(),
    ctz: agentesTraining.timeZone,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function agentesOutlookCalendarUrl(): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: agentesTraining.title,
    startdt: agentesTraining.startUtc,
    enddt: agentesTraining.endUtc,
    body: calendarDetails(),
    location: calendarLocation(),
  })
  return `https://outlook.office.com/calendar/0/deeplink/compose?${params}`
}

function escapeIcs(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}

/** iCalendar lines must be folded at 75 octets. */
function foldIcs(line: string): string {
  const encoder = new TextEncoder()
  const parts: string[] = []
  let current = ''
  let bytes = 0

  for (const char of line) {
    const size = encoder.encode(char).length
    if (bytes + size > 74) {
      parts.push(current)
      current = ' '
      bytes = 1
    }
    current += char
    bytes += size
  }

  parts.push(current)
  return parts.join('\r\n')
}

export function agentesTrainingIcs(): string {
  const start = compactUtc(agentesTraining.startUtc)
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Business Context//Capacitacion de Agentes//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:capacitacion-agentes-${start}@businesscontext.ai`,
    `DTSTAMP:${compactUtc(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${compactUtc(agentesTraining.endUtc)}`,
    `SUMMARY:${escapeIcs(agentesTraining.title)}`,
    `DESCRIPTION:${escapeIcs(calendarDetails())}`,
    `LOCATION:${escapeIcs(calendarLocation())}`,
  ]

  if (agentesTraining.meetUrl) {
    lines.push(`URL:${agentesTraining.meetUrl}`)
  }

  lines.push(
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeIcs(agentesTraining.title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  )

  return lines.map(foldIcs).join('\r\n') + '\r\n'
}
