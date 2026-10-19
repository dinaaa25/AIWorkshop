export const claudeTraining = {
  title: 'Capacitación de Claude',
  description:
    'Capacitación gratuita de 45 minutos sobre las funciones clave de Claude: redactar, leer documentos, analizar datos, artefactos, proyectos, investigación y conectores.',
  meetUrl: 'https://meet.google.com/cox-wwxr-owr',
  /** Tuesday 27 October 2026, 6:00–7:00 p. m. America/Guatemala (UTC−6, no daylight saving). */
  startUtc: '2026-10-28T00:00:00Z',
  endUtc: '2026-10-28T01:00:00Z',
  timeZone: 'America/Guatemala',
  dateLabel: 'Martes 27 de octubre',
  timeLabel: '6:00 – 7:00 p. m.',
  timeZoneLabel: 'hora de Guatemala',
  icsPath: '/capacitacion-claude.ics',
}

function compactUtc(iso: string): string {
  return iso.replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function calendarDetails(): string {
  return `${claudeTraining.description}\n\nUnirse por Google Meet: ${claudeTraining.meetUrl}`
}

export function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: claudeTraining.title,
    dates: `${compactUtc(claudeTraining.startUtc)}/${compactUtc(claudeTraining.endUtc)}`,
    details: calendarDetails(),
    location: claudeTraining.meetUrl,
    ctz: claudeTraining.timeZone,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function outlookCalendarUrl(): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: claudeTraining.title,
    startdt: claudeTraining.startUtc,
    enddt: claudeTraining.endUtc,
    body: calendarDetails(),
    location: claudeTraining.meetUrl,
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

export function claudeTrainingIcs(): string {
  const start = compactUtc(claudeTraining.startUtc)

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Business Context//Capacitacion de Claude//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:capacitacion-claude-${start}@businesscontext.ai`,
    `DTSTAMP:${compactUtc(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${compactUtc(claudeTraining.endUtc)}`,
    `SUMMARY:${escapeIcs(claudeTraining.title)}`,
    `DESCRIPTION:${escapeIcs(calendarDetails())}`,
    `LOCATION:${escapeIcs(claudeTraining.meetUrl)}`,
    `URL:${claudeTraining.meetUrl}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeIcs(claudeTraining.title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].map(foldIcs).join('\r\n') + '\r\n'
}
