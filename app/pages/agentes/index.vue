<script setup lang="ts">
useSeoMeta({
  title: 'Capacitación gratuita de Agentes · 45 minutos',
  description:
    'Capacitación gratuita de 45 minutos por Google Meet, jueves 19 de noviembre de 18:30 a 19:15 (hora de Guatemala). Qué es la IA agéntica, cómo se hacen los agentes, Grok Bot, equipos, ventas, finanzas y skills.',
  ogTitle: 'Capacitación gratuita de Agentes · 45 minutos',
  ogDescription:
    'Aprenda en 45 minutos qué son los agentes y cómo usarlos. Gratis, por Google Meet, jueves 19 de noviembre de 18:30 a 19:15 (hora de Guatemala).',
  themeColor: '#171717',
})

const benefits = [
  { title: 'Ahorre horas cada semana', text: 'Correos, informes, resúmenes y propuestas en minutos, no en horas.' },
  { title: 'Decida con mejor información', text: 'Pídale a un agente que lea, compare y resuma documentos largos por usted.' },
  { title: 'Úselo con seguridad', text: 'Qué información puede compartir, qué no, y cómo revisar lo que el agente responde.' },
  { title: 'Empiece desde cero', text: 'No necesita saber de tecnología. Le mostramos todo paso a paso.' },
]

const topics = [
  {
    title: '¿Qué es la IA agéntica?',
    text: 'Qué es la inteligencia artificial autónoma, qué es un agente y en qué se diferencia de un chat que solo responde.',
  },
  {
    title: 'Cómo se hacen los agentes',
    text: 'Un panorama de las formas de crearlos y de las herramientas que hay hoy: Grok Bot, Dots de OpenAI, Muse de Meta y otras.',
  },
  {
    title: 'Grok Bot, un ejemplo práctico',
    text: 'Vemos Grok Bot en acción: un agente real haciendo una tarea de principio a fin.',
  },
  {
    title: 'Equipos de agentes',
    text: 'Cómo varios agentes trabajan juntos, cada uno con su parte, para terminar un trabajo más grande.',
  },
  {
    title: 'Agentes para ventas',
    text: 'Qué puede hacer un agente en ventas: seguimiento, propuestas y respuesta a clientes.',
  },
  {
    title: 'Agentes para finanzas',
    text: 'Qué puede hacer un agente en finanzas: revisar números, preparar reportes y señalar lo que importa.',
  },
  {
    title: 'Skills',
    text: 'Qué son las skills: instrucciones reutilizables que le enseñan a un agente una tarea que usted repite.',
  },
  {
    title: 'Tus preguntas',
    text: 'Traiga sus dudas. Le decimos cómo usar agentes en su caso.',
  },
]

const topicDelay = (index: number) => ({ transitionDelay: `${index * 60}ms` })
</script>

<template>
  <div class="min-h-screen bg-grok-paper">
    <AgentesHeader>
      <a href="#inscripcion" class="rounded-lg bg-grok px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-grok-dark">
        Inscribirme
      </a>
    </AgentesHeader>

    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-grok/15 via-grok/5 to-transparent opacity-70 blur-3xl" />
        <div class="absolute -bottom-24 -right-16 h-[300px] w-[300px] rounded-full bg-grok/10 blur-3xl" />
      </div>

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-grok/20 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-grok shadow-sm">
            <GrokMark class="h-3.5 w-3.5 text-grok" />
            Capacitación gratuita · 45 minutos
          </span>

          <h1 v-reveal="80" class="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Aprenda a usar agentes en <span class="text-grok">45 minutos</span>.
          </h1>

          <p v-reveal="160" class="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Un agente es una inteligencia artificial que hace tareas por usted, no solo
            responde preguntas. En esta capacitación gratuita le enseñamos qué son, cómo
            se hacen y cómo usarlos en su empresa, con un ejemplo práctico de Grok Bot,
            para que desde el primer día sepa por dónde empezar.
          </p>

          <dl v-reveal="240" class="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Fecha</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">{{ agentesTraining.dateLabel }}</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Hora</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">
                {{ agentesTraining.timeLabel }}
                <span class="block text-xs font-normal text-neutral-400">{{ agentesTraining.timeZoneLabel }}</span>
              </dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Formato</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">En línea, Google Meet</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Precio</dt>
              <dd class="mt-1 text-sm font-medium text-grok">Gratis</dd>
            </div>
          </dl>
        </div>

        <AgentesSignupForm v-reveal="200" />
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
          <span aria-hidden="true" class="block h-0.5 w-6 rounded-full bg-grok" />
          <h2 class="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-900">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-neutral-500">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="topics-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Qué aprenderá</span>
          <h2 id="topics-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Los temas de la capacitación.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">
          La mayoría de personas usa la inteligencia artificial solo para hacer preguntas.
          Le mostramos qué es un agente, cómo se hace y cómo usarlo en el trabajo, con
          ejemplos que puede retomar al terminar la capacitación.
        </p>
      </div>

      <ul v-reveal class="mt-10 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(topic, i) in topics"
          :key="topic.title"
          class="group bg-white p-6 transition duration-500 hover:bg-grok-paper unrevealed:translate-y-2 unrevealed:opacity-0"
          :style="topicDelay(i)"
        >
          <span class="text-sm font-semibold tabular-nums text-grok/40 transition group-hover:text-grok">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="mt-3 text-base font-semibold text-neutral-900">{{ topic.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ topic.text }}</p>
        </li>
      </ul>
    </section>

    <section aria-labelledby="agenda-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
          <div>
            <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">El programa</span>
            <h2 id="agenda-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              45 minutos, directo a lo práctico.
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-neutral-300 sm:text-base lg:pt-2">
            Sin teoría de más. Cada bloque es concreto, con un ejemplo práctico que
            usted puede retomar al terminar.
          </p>
        </div>

        <ol class="mt-10 divide-y divide-neutral-700 border-t border-neutral-700">
          <li
            v-for="(item, i) in topics"
            :key="item.title"
            v-reveal="i * 80"
            class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7"
          >
            <div class="flex items-baseline gap-3 sm:block">
              <span class="text-sm font-semibold tabular-nums text-neutral-300">{{ String(i + 1).padStart(2, '0') }}</span>
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
      <div v-reveal class="flex flex-col items-start gap-6 rounded-3xl border border-grok/20 bg-white p-6 shadow-lg shadow-grok/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div class="flex items-center gap-4">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-grok text-white">
            <GrokMark class="h-6 w-6" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight text-neutral-900">Los cupos son limitados.</h2>
            <p class="mt-1 text-sm text-neutral-600">
              {{ agentesTraining.dateLabel }} · {{ agentesTraining.timeLabel }} ({{ agentesTraining.timeZoneLabel }}). Inscríbase gratis.
            </p>
          </div>
        </div>
        <a href="#inscripcion" class="inline-flex items-center gap-2 rounded-xl bg-grok px-4 py-3 text-sm font-semibold text-white transition hover:bg-grok-dark">
          Inscribirme gratis
          <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </section>

    <footer class="border-t border-neutral-200">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Capacitación de Agentes · Taller Ejecutivo de IA · Guatemala</span>
        <span>Grok es una marca de xAI. Esta capacitación es independiente de xAI.</span>
      </div>
    </footer>
  </div>
</template>
