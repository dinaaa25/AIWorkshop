<script setup lang="ts">
useSeoMeta({
  title: 'Capacitación gratuita de Claude · 45 minutos',
  description:
    'Capacitación gratuita de 45 minutos para aprender las funciones clave de Claude: redactar, analizar documentos y datos, crear artefactos, investigar y conectar sus herramientas.',
  ogTitle: 'Capacitación gratuita de Claude · 45 minutos',
  ogDescription:
    'Aprenda en 45 minutos a usar las funciones clave de Claude en su trabajo diario. Gratis. Inscríbase con su correo.',
  themeColor: '#d97757',
})

const benefits = [
  { title: 'Ahorre horas cada semana', text: 'Correos, informes, resúmenes y propuestas en minutos, no en horas.' },
  { title: 'Decida con mejor información', text: 'Pídale a Claude que lea, compare y resuma documentos largos por usted.' },
  { title: 'Úselo con seguridad', text: 'Qué información puede compartir, qué no, y cómo revisar lo que Claude responde.' },
  { title: 'Empiece desde cero', text: 'No necesita saber de tecnología. Le mostramos todo paso a paso.' },
]

const features = [
  {
    title: 'Conversar y redactar',
    text: 'Cómo pedirle las cosas a Claude para obtener buenas respuestas: correos, cartas, propuestas y textos con el tono correcto.',
  },
  {
    title: 'Leer documentos y archivos',
    text: 'Suba contratos, informes o presentaciones en PDF. Claude los resume, encuentra lo importante y responde sus preguntas.',
  },
  {
    title: 'Analizar datos y Excel',
    text: 'Suba una hoja de cálculo y pida totales, tendencias y gráficas, sin fórmulas.',
  },
  {
    title: 'Artefactos',
    text: 'Claude crea documentos, tablas, diagramas y pequeñas aplicaciones que puede ver, editar y compartir al momento.',
  },
  {
    title: 'Proyectos',
    text: 'Guarde documentos e instrucciones en un proyecto para que Claude conozca su empresa y no tenga que repetirle todo.',
  },
  {
    title: 'Búsqueda web e investigación',
    text: 'Claude busca en internet, compara fuentes y le entrega un informe con enlaces para verificar.',
  },
  {
    title: 'Conectores',
    text: 'Conecte Claude con Gmail, Google Calendar, Google Drive y otras herramientas para trabajar con su propia información.',
  },
  {
    title: 'Estilos e instrucciones',
    text: 'Enséñele a Claude cómo escribe usted y qué prefiere, para que cada respuesta suene a su empresa.',
  },
]

const agenda = [
  { time: '10 min', title: 'Primeros pasos', text: 'Cómo funciona Claude y cómo pedirle las cosas para obtener buenas respuestas.' },
  { time: '15 min', title: 'Documentos, datos y artefactos', text: 'Leer archivos, analizar un Excel y crear documentos listos para usar.' },
  { time: '10 min', title: 'Proyectos, investigación y conectores', text: 'Cómo hacer que Claude conozca su empresa y trabaje con su información.' },
  { time: '10 min', title: 'Preguntas', text: 'Traiga sus dudas. Le decimos cómo usar Claude en su caso.' },
]

const featureDelay = (index: number) => ({ transitionDelay: `${index * 60}ms` })
</script>

<template>
  <div class="min-h-screen bg-claude-ivory">
    <ClaudeHeader>
      <a href="#inscripcion" class="rounded-lg bg-claude px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-claude-dark">
        Inscribirme
      </a>
    </ClaudeHeader>

    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-claude/25 via-claude/5 to-transparent opacity-70 blur-3xl" />
        <div class="absolute -bottom-24 -right-16 h-[300px] w-[300px] rounded-full bg-claude/10 blur-3xl" />
      </div>

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-claude/30 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-claude-dark shadow-sm">
            <ClaudeMark class="h-3.5 w-3.5 animate-claude-spin text-claude motion-reduce:animate-none" />
            Capacitación gratuita · 45 minutos
          </span>

          <h1 v-reveal="80" class="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Aprenda a usar Claude en <span class="text-claude">45 minutos</span>.
          </h1>

          <p v-reveal="160" class="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Claude es el asistente de inteligencia artificial de Anthropic. Puede redactar,
            leer documentos, analizar datos e investigar por usted. En esta capacitación
            gratuita le enseñamos todas sus funciones clave, con ejemplos prácticos, para
            que desde el primer día ahorre tiempo en su trabajo.
          </p>

          <dl v-reveal="240" class="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Duración</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">45 minutos</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Precio</dt>
              <dd class="mt-1 text-sm font-medium text-claude-dark">Gratis</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Nivel</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">Desde cero</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Fecha</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">Se envía por correo</dd>
            </div>
          </dl>
        </div>

        <ClaudeSignupForm v-reveal="200" />
      </div>
    </section>

    <section aria-label="Beneficios" class="border-y border-neutral-200 bg-white">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-neutral-200 lg:px-8">
        <article
          v-for="(item, i) in benefits"
          :key="item.title"
          v-reveal="i * 80"
          :class="i === 0 ? 'lg:pr-6' : i === benefits.length - 1 ? 'lg:pl-6' : 'lg:px-6'"
        >
          <span aria-hidden="true" class="block h-0.5 w-6 rounded-full bg-claude" />
          <h2 class="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-900">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-neutral-500">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="features-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Qué aprenderá</span>
          <h2 id="features-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Todas las funciones clave de Claude.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">
          La mayoría de personas usa Claude solo para hacer preguntas. Le mostramos
          todo lo demás que puede hacer, con ejemplos de trabajo real que puede
          repetir al terminar la capacitación.
        </p>
      </div>

      <ul v-reveal class="mt-10 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(feature, i) in features"
          :key="feature.title"
          class="group bg-white p-6 transition duration-500 hover:bg-claude-ivory unrevealed:translate-y-2 unrevealed:opacity-0"
          :style="featureDelay(i)"
        >
          <span class="text-sm font-semibold tabular-nums text-claude/60 transition group-hover:text-claude">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="mt-3 text-base font-semibold text-neutral-900">{{ feature.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ feature.text }}</p>
        </li>
      </ul>
    </section>

    <section aria-labelledby="agenda-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
          <div>
            <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-claude">El programa</span>
            <h2 id="agenda-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              45 minutos, directo a lo práctico.
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-neutral-300 sm:text-base lg:pt-2">
            Sin teoría de más. Cada bloque es una demostración en vivo que usted puede
            repetir en su propia cuenta de Claude.
          </p>
        </div>

        <ol class="mt-10 divide-y divide-neutral-700 border-t border-neutral-700">
          <li
            v-for="(item, i) in agenda"
            :key="item.title"
            v-reveal="i * 80"
            class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7"
          >
            <div class="flex items-baseline gap-3 sm:block">
              <span class="text-sm font-semibold tabular-nums text-claude">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">{{ item.time }}</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
              <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">{{ item.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div v-reveal class="flex flex-col items-start gap-6 rounded-3xl border border-claude/30 bg-white p-6 shadow-lg shadow-claude/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div class="flex items-center gap-4">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-claude text-white">
            <ClaudeMark class="h-6 w-6" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight text-neutral-900">Los cupos son limitados.</h2>
            <p class="mt-1 text-sm text-neutral-600">Inscríbase gratis y le enviamos los detalles por correo.</p>
          </div>
        </div>
        <a href="#inscripcion" class="inline-flex items-center gap-2 rounded-xl bg-claude px-4 py-3 text-sm font-semibold text-white transition hover:bg-claude-dark">
          Inscribirme gratis
          <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>

    <footer class="border-t border-neutral-200">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Capacitación de Claude · Taller Ejecutivo de IA · Guatemala</span>
        <span>Claude es una marca de Anthropic. Esta capacitación es independiente de Anthropic.</span>
      </div>
    </footer>
  </div>
</template>
