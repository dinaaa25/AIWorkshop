/**
 * Free courses (lead magnets) and their schedule.
 *
 * To schedule the next cycle, add one entry to SESSIONS. The site always features the
 * next session that has not ended yet; past sessions show as "realizada" automatically.
 *
 *   {
 *     id: 'agentes-2027-01-14',            // <course>-<local date>, used as the Event in the sheet
 *     course: 'agentes',
 *     startUtc: '2027-01-15T00:30:00Z',    // Guatemala is UTC−6 all year: 6:30 p. m. → 00:30Z next day
 *     endUtc: '2027-01-15T01:30:00Z',
 *     meetUrl: 'https://meet.google.com/xxx-xxxx-xxx',
 *     dateLabel: 'Jueves 14 de enero',
 *     timeLabel: '6:30 – 7:30 p. m.',
 *   },
 */

export type CourseKey = 'claude' | 'agentes'

export type CourseTheme = {
  /** Page background */
  page: string
  /** Solid button / accent background */
  solid: string
  solidHover: string
  /** Accent text */
  text: string
  /** Soft accent background (pills, notes) */
  soft: string
  /** Border with accent tint */
  border: string
  /** Focus ring / border for inputs */
  focus: string
  /** Shadow tint */
  shadow: string
  /** Hero glow gradient */
  glow: string
  /** Hover background for cards */
  hoverBg: string
}

export type Course = {
  key: CourseKey
  mark: 'claude' | 'grok'
  title: string
  shortName: string
  description: string
  heroPrefix: string
  heroHighlight: string
  lead: string
  topicsTitle: string
  topicsLead: string
  agendaLead: string
  benefits: { title: string, text: string }[]
  topics: { title: string, text: string }[]
  agenda?: { time: string, title: string, text: string }[]
  /** Shown on the confirmation page */
  prepNote?: { before: string, linkLabel: string, href: string, after: string }
  trademark: string
  theme: CourseTheme
}

export type Session = {
  id: string
  course: CourseKey
  startUtc: string
  endUtc: string
  meetUrl: string
  dateLabel: string
  timeLabel: string
}

export const TIME_ZONE = 'America/Guatemala'
export const TIME_ZONE_LABEL = 'hora de Guatemala'

export const COURSES: Record<CourseKey, Course> = {
  claude: {
    key: 'claude',
    mark: 'claude',
    title: 'Capacitación de Claude',
    shortName: 'Claude',
    description:
      'Capacitación gratuita en línea sobre las funciones clave de Claude: redactar, leer documentos, analizar datos, artefactos, proyectos, investigación y conectores.',
    heroPrefix: 'Aprenda a usar Claude en',
    heroHighlight: 'una hora',
    lead: 'Claude es el asistente de inteligencia artificial de Anthropic. Puede redactar, leer documentos, analizar datos e investigar por usted. En esta capacitación gratuita le enseñamos sus funciones clave, con ejemplos prácticos, para que desde el primer día ahorre tiempo en su trabajo.',
    topicsTitle: 'Todas las funciones clave de Claude.',
    topicsLead: 'La mayoría de personas usa Claude solo para hacer preguntas. Le mostramos todo lo demás que puede hacer, con ejemplos de trabajo real que puede repetir al terminar la capacitación.',
    agendaLead: 'Sin teoría de más. Cada bloque es una demostración en vivo que usted puede repetir en su propia cuenta de Claude.',
    benefits: [
      { title: 'Ahorre horas cada semana', text: 'Correos, informes, resúmenes y propuestas en minutos, no en horas.' },
      { title: 'Decida con mejor información', text: 'Pídale a Claude que lea, compare y resuma documentos largos por usted.' },
      { title: 'Úselo con seguridad', text: 'Qué información puede compartir, qué no, y cómo revisar lo que Claude responde.' },
      { title: 'Empiece desde cero', text: 'No necesita saber de tecnología. Le mostramos todo paso a paso.' },
    ],
    topics: [
      { title: 'Conversar y redactar', text: 'Cómo pedirle las cosas a Claude para obtener buenas respuestas: correos, cartas, propuestas y textos con el tono correcto.' },
      { title: 'Leer documentos y archivos', text: 'Suba contratos, informes o presentaciones en PDF. Claude los resume, encuentra lo importante y responde sus preguntas.' },
      { title: 'Analizar datos y Excel', text: 'Suba una hoja de cálculo y pida totales, tendencias y gráficas, sin fórmulas.' },
      { title: 'Artefactos', text: 'Claude crea documentos, tablas, diagramas y pequeñas aplicaciones que puede ver, editar y compartir al momento.' },
      { title: 'Proyectos', text: 'Guarde documentos e instrucciones en un proyecto para que Claude conozca su empresa y no tenga que repetirle todo.' },
      { title: 'Búsqueda web e investigación', text: 'Claude busca en internet, compara fuentes y le entrega un informe con enlaces para verificar.' },
      { title: 'Conectores', text: 'Conecte Claude con Gmail, Google Calendar, Google Drive y otras herramientas para trabajar con su propia información.' },
      { title: 'Estilos e instrucciones', text: 'Enséñele a Claude cómo escribe usted y qué prefiere, para que cada respuesta suene a su empresa.' },
    ],
    agenda: [
      { time: '10 min', title: 'Primeros pasos', text: 'Cómo funciona Claude y cómo pedirle las cosas para obtener buenas respuestas.' },
      { time: '20 min', title: 'Documentos, datos y artefactos', text: 'Leer archivos, analizar un Excel y crear documentos listos para usar.' },
      { time: '15 min', title: 'Proyectos, investigación y conectores', text: 'Cómo hacer que Claude conozca su empresa y trabaje con su información.' },
      { time: '15 min', title: 'Preguntas', text: 'Traiga sus dudas. Le decimos cómo usar Claude en su caso.' },
    ],
    prepNote: {
      before: 'Si puede, cree antes una cuenta gratuita en',
      linkLabel: 'claude.ai',
      href: 'https://claude.ai',
      after: 'para seguir la demostración.',
    },
    trademark: 'Claude es una marca de Anthropic. Esta capacitación es independiente de Anthropic.',
    theme: {
      page: 'bg-claude-ivory',
      solid: 'bg-claude',
      solidHover: 'hover:bg-claude-dark',
      text: 'text-claude-dark',
      soft: 'bg-claude/10',
      border: 'border-claude/30',
      focus: 'focus:border-claude focus:ring-claude/20',
      shadow: 'shadow-claude/10',
      glow: 'from-claude/25 via-claude/5',
      hoverBg: 'hover:bg-claude-ivory',
    },
  },
  agentes: {
    key: 'agentes',
    mark: 'grok',
    title: 'Capacitación de Agentes',
    shortName: 'Agentes y Grok Bot',
    description:
      'Capacitación gratuita en línea sobre agentes: qué es la IA agéntica, cómo se hacen, Grok Bot, equipos de agentes, ventas, finanzas y skills.',
    heroPrefix: 'Aprenda a usar agentes de IA en',
    heroHighlight: 'una sesión',
    lead: 'Un agente es una inteligencia artificial que hace tareas por usted, no solo responde preguntas. En esta capacitación gratuita le enseñamos qué son, cómo se hacen y cómo usarlos en su empresa, con un ejemplo práctico de Grok Bot, para que desde el primer día sepa por dónde empezar.',
    topicsTitle: 'Los temas de la capacitación.',
    topicsLead: 'La mayoría de personas usa la inteligencia artificial solo para hacer preguntas. Le mostramos qué es un agente, cómo se hace y cómo usarlo en el trabajo, con ejemplos que puede retomar al terminar la capacitación.',
    agendaLead: 'Sin teoría de más. Cada bloque es concreto, con un ejemplo práctico que usted puede retomar al terminar.',
    benefits: [
      { title: 'Ahorre horas cada semana', text: 'Tareas completas que un agente hace por usted, de principio a fin.' },
      { title: 'Decida con mejor información', text: 'Pídale a un agente que lea, compare y resuma documentos largos por usted.' },
      { title: 'Úselo con seguridad', text: 'Qué información puede compartir, qué no, y cómo revisar lo que el agente hace.' },
      { title: 'Empiece desde cero', text: 'No necesita saber de tecnología. Le mostramos todo paso a paso.' },
    ],
    topics: [
      { title: '¿Qué es la IA agéntica?', text: 'Qué es la inteligencia artificial autónoma, qué es un agente y en qué se diferencia de un chat que solo responde.' },
      { title: 'Cómo se hacen los agentes', text: 'Un panorama de las formas de crearlos y de las herramientas que hay hoy: Grok Bot, Dots de OpenAI, Muse de Meta y otras.' },
      { title: 'Grok Bot, un ejemplo práctico', text: 'Vemos Grok Bot en acción: un agente real haciendo una tarea de principio a fin.' },
      { title: 'Equipos de agentes', text: 'Cómo varios agentes trabajan juntos, cada uno con su parte, para terminar un trabajo más grande.' },
      { title: 'Agentes para ventas', text: 'Qué puede hacer un agente en ventas: seguimiento, propuestas y respuesta a clientes.' },
      { title: 'Agentes para finanzas', text: 'Qué puede hacer un agente en finanzas: revisar números, preparar reportes y señalar lo que importa.' },
      { title: 'Skills', text: 'Qué son las skills: instrucciones reutilizables que le enseñan a un agente una tarea que usted repite.' },
      { title: 'Sus preguntas', text: 'Traiga sus dudas. Le decimos cómo usar agentes en su caso.' },
    ],
    trademark: 'Grok es una marca de xAI. Esta capacitación es independiente de xAI.',
    theme: {
      page: 'bg-grok-paper',
      solid: 'bg-grok',
      solidHover: 'hover:bg-grok-dark',
      text: 'text-grok',
      soft: 'bg-grok/10',
      border: 'border-grok/20',
      focus: 'focus:border-grok focus:ring-grok/20',
      shadow: 'shadow-grok/10',
      glow: 'from-grok/15 via-grok/5',
      hoverBg: 'hover:bg-grok-paper',
    },
  },
}

export const COURSE_KEYS = Object.keys(COURSES) as CourseKey[]

/** Oldest first. */
export const SESSIONS: Session[] = [
  {
    id: 'claude-2026-10-27',
    course: 'claude',
    startUtc: '2026-10-28T00:00:00Z',
    endUtc: '2026-10-28T01:00:00Z',
    meetUrl: 'https://meet.google.com/cox-wwxr-owr',
    dateLabel: 'Martes 27 de octubre',
    timeLabel: '6:00 – 7:00 p. m.',
  },
  {
    id: 'agentes-2026-11-19',
    course: 'agentes',
    startUtc: '2026-11-20T00:30:00Z',
    endUtc: '2026-11-20T01:15:00Z',
    meetUrl: 'https://meet.google.com/cef-yyxo-mey',
    dateLabel: 'Jueves 19 de noviembre',
    timeLabel: '6:30 – 7:15 p. m.',
  },
  {
    id: 'claude-2026-12-03',
    course: 'claude',
    startUtc: '2026-12-04T00:30:00Z',
    endUtc: '2026-12-04T01:30:00Z',
    meetUrl: 'https://meet.google.com/qzh-qzsy-fhz',
    dateLabel: 'Jueves 3 de diciembre',
    timeLabel: '6:30 – 7:30 p. m.',
  },
]

const byStart = (a: Session, b: Session) => Date.parse(a.startUtc) - Date.parse(b.startUtc)

export function isCourseKey(value: unknown): value is CourseKey {
  return typeof value === 'string' && value in COURSES
}

export function sessionById(id: unknown): Session | undefined {
  return SESSIONS.find(s => s.id === id)
}

export function isPast(session: Session, now = Date.now()): boolean {
  return Date.parse(session.endUtc) <= now
}

/** The next session that has not ended yet, optionally for one course. */
export function nextSession(course?: CourseKey, now = Date.now()): Session | undefined {
  return [...SESSIONS]
    .sort(byStart)
    .find(s => (!course || s.course === course) && !isPast(s, now))
}

/** Sessions that already happened, most recent first. */
export function pastSessions(course?: CourseKey, now = Date.now()): Session[] {
  return [...SESSIONS]
    .sort(byStart)
    .reverse()
    .filter(s => (!course || s.course === course) && isPast(s, now))
}

/** Sheet "Event" value used when there is no upcoming date and the visitor asks to be notified. */
export function waitlistId(course: CourseKey): string {
  return `${course}-waitlist`
}

export function parseWaitlistId(id: unknown): CourseKey | undefined {
  if (typeof id !== 'string' || !id.endsWith('-waitlist')) {
    return undefined
  }
  const course = id.slice(0, -'-waitlist'.length)
  return isCourseKey(course) ? course : undefined
}

export function durationLabel(session: Session): string {
  const minutes = Math.round((Date.parse(session.endUtc) - Date.parse(session.startUtc)) / 60000)
  if (minutes === 60) {
    return '1 hora'
  }
  if (minutes > 60 && minutes % 60 === 0) {
    return `${minutes / 60} horas`
  }
  return `${minutes} minutos`
}

export function sessionTitle(session: Session): string {
  return COURSES[session.course].title
}

/* ---------- Calendar links ---------- */

function compactUtc(iso: string): string {
  return iso.replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function calendarDetails(session: Session): string {
  return `${COURSES[session.course].description}\n\nUnirse por Google Meet: ${session.meetUrl}`
}

export function sessionIcsPath(session: Session): string {
  return `/calendario/${session.id}.ics`
}

export function sessionGoogleUrl(session: Session): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: sessionTitle(session),
    dates: `${compactUtc(session.startUtc)}/${compactUtc(session.endUtc)}`,
    details: calendarDetails(session),
    location: session.meetUrl,
    ctz: TIME_ZONE,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function sessionOutlookUrl(session: Session): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: sessionTitle(session),
    startdt: session.startUtc,
    enddt: session.endUtc,
    body: calendarDetails(session),
    location: session.meetUrl,
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

export function sessionIcs(session: Session): string {
  const title = sessionTitle(session)
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Business Context AI//Capacitaciones//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${session.id}@businesscontext.ai`,
    `DTSTAMP:${compactUtc(new Date().toISOString())}`,
    `DTSTART:${compactUtc(session.startUtc)}`,
    `DTEND:${compactUtc(session.endUtc)}`,
    `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(calendarDetails(session))}`,
    `LOCATION:${escapeIcs(session.meetUrl)}`,
    `URL:${session.meetUrl}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeIcs(title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].map(foldIcs).join('\r\n') + '\r\n'
}
