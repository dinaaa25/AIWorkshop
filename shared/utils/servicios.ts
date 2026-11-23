/**
 * Business Context AI · services content.
 * Single source for the home page (/) and the /servicios/pdf one-pager, so the two never drift apart.
 */

export const BRAND = {
  name: 'Business Context AI',
  email: 'mark@businesscontext.ai',
  site: 'businesscontext.ai',
  pageUrl: 'https://businesscontext.ai',
  pdfPath: '/business-context-ai-servicios.pdf',
}

/** Guarantee and scarcity numbers. Leave cuposPorMes null unless it is true; the copy hides it when null. */
export const OFFER = {
  diagnosticoDias: 10,
  horasGarantizadas: 20,
  precioDiagnostico: 'Q 7,900',
  tiempoEquipo: '1:30 horas',
  tiempoGerencia: '1 hora',
  cuposPorMes: null as number | null,
}

export const HERO = {
  eyebrow: 'Automatización de procesos con IA',
  title: 'Recupere las horas que su equipo pierde en procesos repetitivos.',
  lead: `Usted nos explica el proceso que más tiempo le quita a su equipo. En ${OFFER.diagnosticoDias} días hábiles lo mapeamos y le mostramos exactamente qué pasos puede eliminar la IA y cuánto tiempo le ahorraría. Después lo implementamos y lo dejamos funcionando, con su equipo ya capacitado.`,
  cta: 'Solicitar mi diagnóstico',
  freeCta: 'Empiece gratis: próxima capacitación',
}

/**
 * Social proof. Everything here is optional: the proof strip only shows what is filled in.
 * Only put real numbers and quotes (with permission) here.
 */
export const PROOF = {
  /** Total people who attended the free courses, e.g. 85 */
  personasCapacitadas: null as number | null,
  /** Companies represented, e.g. 30 */
  empresas: null as number | null,
  /** Industries of attendees and clients, e.g. ['Agroexportación', 'Legal', 'Distribución'] */
  industrias: [] as string[],
  testimonios: [] as { quote: string, name: string, role: string }[],
}

export const BEFORE_AFTER = {
  before: [
    'Alguien copia datos de correos y PDFs al sistema, a mano.',
    'Los errores se descubren cuando el cliente o el proveedor reclama.',
    'Los reportes se arman cada semana en Excel y ya llegan viejos.',
    'Si la persona clave sale de vacaciones, el proceso se detiene.',
  ],
  after: [
    'La IA lee, valida y registra. Su equipo solo revisa y aprueba.',
    'Las diferencias se marcan antes de que salgan de la empresa.',
    'Los dashboards se actualizan solos, todos los días.',
    'El proceso corre igual, con o sin la persona clave.',
  ],
}

export const STEPS = [
  {
    title: 'Usted trae el proceso',
    text: 'Elija la tarea repetitiva que más horas consume. Solo necesitamos 1:30 horas con las personas que la hacen todos los días.',
  },
  {
    title: 'Lo mapeamos y medimos',
    text: 'Dibujamos el proceso paso a paso, medimos horas y costo, y señalamos qué partes elimina la IA, cuáles asiste y cuáles se quedan con una persona.',
  },
  {
    title: 'Lo implementamos',
    text: 'Construimos la solución sobre las herramientas que usted ya usa, la probamos con sus documentos reales y capacitamos a su equipo para operarla.',
  },
]

export type ProcessExample = {
  title: string
  subtitle: string
  before: string
  after: string
  flow: string[]
}

export const EXAMPLES: ProcessExample[] = [
  {
    title: 'Procure to Pay',
    subtitle: 'De la requisición al pago',
    before: 'Requisiciones por correo, cotizaciones en hojas sueltas y facturas que alguien compara a mano contra la orden de compra.',
    after: 'Cada factura se cruza sola con la orden y la recepción. Solo llegan a revisión las que no cuadran.',
    flow: ['Requisición', 'Orden de compra', 'Recepción', 'Factura', 'Pago'],
  },
  {
    title: 'Ingreso de órdenes de compra',
    subtitle: 'De correo, PDF o WhatsApp al sistema',
    before: 'Los pedidos llegan en todos los formatos y alguien los digita uno por uno en el sistema.',
    after: 'La IA lee el pedido, valida cliente, producto y precio, y lo deja listo en su sistema para aprobar.',
    flow: ['Correo / PDF / WhatsApp', 'Lectura con IA', 'Validación', 'Pedido en su sistema'],
  },
  {
    title: 'Logística de exportación e importación',
    subtitle: 'Documentos, aduana y seguimiento',
    before: 'Facturas comerciales, listas de empaque y certificados que se arman y revisan a mano para cada embarque.',
    after: 'Los documentos se generan desde la orden, se revisan contra los requisitos y el equipo recibe alertas del estado de cada embarque.',
    flow: ['Orden', 'Documentos de embarque', 'Revisión', 'Seguimiento y alertas'],
  },
  {
    title: 'Servicio al cliente',
    subtitle: 'Chat, correo y voz',
    before: 'Las mismas preguntas todo el día: estado del pedido, precios, horarios. Los clientes esperan y el equipo se satura.',
    after: 'Un agente responde al instante con la información de su empresa, por chat, correo o voz, y pasa a una persona lo que lo requiere.',
    flow: ['Pregunta del cliente', 'Agente con sus datos', 'Respuesta', 'Escala a una persona'],
  },
]

export const TOOLS = [
  { name: 'Claude', note: 'Agentes', src: '/logos/claude.svg' },
  { name: 'Grok Bot', note: 'Agentes', src: '/logos/grok.svg' },
  { name: 'n8n', note: 'Flujos', src: '' },
  { name: 'ElevenLabs', note: 'Voz', src: '' },
  { name: 'Código a la medida', note: 'Integraciones', src: '' },
]

export const DATA_SECTION = {
  bridgeEyebrow: 'Además de automatizar procesos',
  bridgeTitle: 'Cada proceso que automatizamos genera datos. El siguiente paso es usarlos para la toma de decisiones.',
  name: 'Datos unificados y dashboards al día',
  eyebrow: 'Servicio · Datos unificados y dashboards al día',
  title: 'Una sola verdad, siempre actualizada, sin armar reportes a mano.',
  lead: 'Sus datos viven en el sistema contable, en hojas de Excel, en el CRM y en correos. Los unimos en un solo lugar, construimos dashboards que se actualizan solos y le damos a sus agentes de IA acceso seguro a esa información, para que cualquier persona del equipo pueda preguntarle a su empresa y recibir la respuesta con números.',
  steps: [
    { title: 'Todos sus datos en un solo lugar', text: 'Conectamos su sistema contable o ERP, sus hojas de Excel, el CRM y otras fuentes. Los datos se copian solos cada día a un lugar central y seguro. Nadie vuelve a copiar y pegar para cuadrar cifras.' },
    { title: 'Dashboards siempre al día', text: 'Ventas, compras, inventario, cobros y márgenes con datos de hoy, no de la semana pasada. Cada área ve sus números y la gerencia ve el total.' },
    { title: 'Pregúntele a su empresa', text: '«¿Qué clientes compraron menos este mes?» Sus agentes de IA, como Grok Bot o Claude, responden con sus datos reales, no con suposiciones.' },
  ],
  problem: 'Hoy la información vive en sistemas que no se hablan entre sí. Para responder una pregunta simple, alguien exporta datos, los pega en Excel y los cuadra a mano. Cuando el reporte llega, ya está viejo, y cada área tiene su propia versión de los números.',
  outcomes: [
    'Una sola versión de los números para toda la empresa',
    'Reportes que antes tomaban días, listos cada mañana',
    'Alertas cuando algo se sale de lo normal: inventario bajo, cobros atrasados, márgenes que caen',
    'Agentes de IA que responden con sus datos, con acceso controlado por usuario',
    'Nosotros mantenemos las conexiones: si un sistema cambia, lo ajustamos',
  ],
  questions: [
    '¿Cuál es nuestro margen real por cliente este trimestre?',
    '¿Qué facturas de proveedores vencen esta semana?',
    '¿Qué productos están por debajo del inventario mínimo?',
  ],
}

export type Service = {
  tag: string
  name: string
  promise: string
  deliverables: string[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    tag: 'Diagnóstico',
    name: 'Diagnóstico de proceso repetitivo',
    promise: `En ${OFFER.diagnosticoDias} días hábiles sabe exactamente cuántas horas y cuánto dinero puede recuperar en un proceso, y qué hacer primero.`,
    deliverables: [
      'Mapa del proceso: cómo funciona hoy y cómo funcionaría con IA',
      'Horas y costo actuales, y el ahorro esperado',
      'Plan de implementación con presupuesto y retorno',
      'Lista priorizada de los siguientes 3 procesos a automatizar',
      'Sesión de 1 hora con la gerencia para presentar resultados',
    ],
    featured: true,
  },
  {
    tag: 'Implementación',
    name: 'Automatización de procesos con IA',
    promise: 'El proceso que mapeamos queda funcionando: la IA hace el trabajo repetitivo y su equipo solo revisa y aprueba.',
    deliverables: [
      'Solución construida sobre sus herramientas actuales',
      'Pruebas con sus documentos y datos reales',
      'Capacitación del equipo que la opera',
      'Manual corto y soporte durante el arranque',
    ],
  },
  {
    tag: 'Datos',
    name: 'Datos unificados y dashboards al día',
    promise: 'Toda la información de su empresa en un solo lugar, dashboards que se actualizan solos y agentes que responden con sus números.',
    deliverables: [
      'Conexión de sus sistemas y hojas de cálculo',
      'Dashboards de gestión actualizados a diario',
      'Acceso seguro de sus agentes de IA a sus datos',
      'Mantenimiento de las conexiones incluido',
    ],
  },
  {
    tag: 'Equipo',
    name: 'Capacitación de IA aplicada',
    promise: 'Su equipo sale usando IA en su trabajo real del día siguiente, con las herramientas que ya tiene su empresa.',
    deliverables: [
      'Programa diseñado para su empresa y su industria',
      'Ejercicios con sus propios procesos y documentos',
      'Biblioteca de instrucciones y flujos listos para usar',
      'Reglas de uso y manejo seguro de datos',
    ],
  },
  {
    tag: 'Continuidad',
    name: 'Acompañamiento mensual',
    promise: 'Sus automatizaciones siguen funcionando y mejorando, y cada trimestre se suma una nueva.',
    deliverables: [
      'Monitoreo y ajustes de lo implementado',
      'Una nueva automatización por trimestre',
      'Reunión mensual de resultados',
      'Prioridad en soporte',
    ],
  },
]

export const GUARANTEE = {
  title: 'Garantía del diagnóstico',
  text: `Si en el diagnóstico no encontramos al menos ${OFFER.horasGarantizadas} horas al mes de ahorro en su proceso, no nos paga. Y si decide implementar con nosotros, los ${OFFER.precioDiagnostico} del diagnóstico se descuentan completos de la implementación.`,
  implementation: 'En la implementación, el compromiso es simple: la solución funciona con sus documentos reales o seguimos trabajando sin costo adicional hasta que funcione.',
}

export const TRAINING = {
  eyebrow: 'Capacitaciones',
  title: 'Empiece gratis. Cuando quiera, lo llevamos a su empresa.',
  freeTitle: 'Gratis y en línea, para cualquiera',
  freeLead: 'Una hora, cada pocas semanas, alternando Claude y agentes de IA con Grok Bot. Es la mejor forma de conocernos antes de contratar algo.',
  companyTitle: 'A la medida, para su equipo',
  lead: 'Diseñamos cada capacitación con los procesos, documentos y sistemas de su empresa. Su equipo practica con su propio trabajo, no con ejemplos de otras industrias, y se lleva instrucciones y flujos que puede usar al día siguiente.',
  points: [
    { title: 'Conectada a sus herramientas', text: 'Su sistema contable, Office o Google, WhatsApp, y el asistente de IA que ya usa su empresa.' },
    { title: 'Por área', text: 'Finanzas, compras, logística, ventas y servicio al cliente, cada una con sus casos.' },
    { title: 'Con reglas claras', text: 'Qué datos se pueden usar, qué revisa siempre una persona y qué no se permite.' },
  ],
}

export const FAQ = [
  {
    q: '¿Las capacitaciones gratuitas son realmente gratis?',
    a: 'Sí. Duran una hora, son en línea y no tienen costo ni compromiso. Las damos porque es la mejor forma de que nos conozca. Si después quiere automatizar un proceso, el siguiente paso es el diagnóstico.',
  },
  {
    q: '¿Qué pasa con la confidencialidad de mis datos?',
    a: 'Trabajamos con cuentas empresariales que no usan sus datos para entrenar modelos, damos acceso solo a lo necesario y firmamos un acuerdo de confidencialidad antes de ver cualquier información.',
  },
  {
    q: '¿Tengo que cambiar mi sistema o comprar software nuevo?',
    a: 'No. Construimos sobre lo que ya usa. Elegimos la herramienta según su proceso y su preferencia, no al revés.',
  },
  {
    q: '¿Cuánto tiempo toma?',
    a: `El diagnóstico toma ${OFFER.diagnosticoDias} días hábiles. Una implementación típica de un proceso toma entre 3 y 8 semanas, según las integraciones.`,
  },
  {
    q: '¿Cuánto tiempo necesita mi equipo?',
    a: 'Para el diagnóstico, 1:30 horas con las personas que hacen el proceso, acceso a ejemplos reales y 1 hora con la gerencia para presentar resultados. Nosotros hacemos el resto.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: `El diagnóstico cuesta ${OFFER.precioDiagnostico}, está cubierto por la garantía y se descuenta completo si implementa con nosotros. La implementación, los datos y la capacitación se cotizan según el proceso, con el resultado del diagnóstico en la mano.`,
  },
]

export const CTA = {
  title: '¿Qué proceso le quita más horas a su equipo?',
  text: 'Cuéntenos cuál es. Le respondemos en un día hábil con una propuesta para mapearlo.',
}
