<script setup lang="ts">
type Mark = {
  name: string
  src: string
  house?: string
}

const models: Mark[] = [
  { name: 'Claude', src: '/logos/claude.svg' },
  { name: 'Gemini', src: '/logos/gemini.svg' },
  { name: 'ChatGPT', src: '/logos/openai.svg' },
  { name: 'DeepSeek', src: '/logos/deepseek.svg' },
  { name: 'Grok', src: '/logos/grok.svg' },
  { name: 'Jev', house: 'TypeSafe', src: '/logos/typesafe.png' },
  { name: 'Qwen', house: 'Alibaba', src: '/logos/qwen.svg' },
  { name: 'Kimi K3', src: '/logos/kimi.svg' },
]

const agents: Mark[] = [
  { name: 'Grok Bot', src: '/logos/grok.svg' },
  { name: 'Dots', house: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'Muse', house: 'Meta', src: '/logos/meta.svg' },
]

const glance = [
  { title: 'Para quién', text: 'CEOs, dueños y gerentes que deciden en qué invierte la empresa.' },
  { title: 'Qué se lleva', text: 'Un plan claro para su empresa y un kit de 13 herramientas listas para usar.' },
  { title: 'Cómo es', text: 'Práctico. Casos reales, números reales y tiempo para hablar de su empresa.' },
  { title: 'Fecha y lugar', text: '5 de diciembre, Ciudad de Guatemala. Después de pagar, le enviamos por correo la hora y el lugar exacto.' },
]

const audiences = [
  {
    title: 'CEOs y gerentes generales',
    text: 'Quiere saber dónde la IA ahorra tiempo y dinero en su operación, sin gastar en modas.',
  },
  {
    title: 'Socios de bufetes y firmas de servicios',
    text: 'Quiere usar IA sin arriesgar la confidencialidad de sus clientes ni la calidad de su trabajo.',
  },
  {
    title: 'Directores de área',
    text: 'Le piden resultados con IA y necesita un plan concreto que su equipo pueda seguir.',
  },
]

const markDelay = (index: number) => ({ transitionDelay: `${150 + index * 50}ms` })
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <header class="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex flex-col leading-tight">
          <strong class="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">Taller Ejecutivo de IA</strong>
          <span class="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">Guatemala</span>
        </div>
        <nav class="flex items-center gap-3 sm:gap-5">
          <a href="#instructores" class="hidden text-xs font-medium uppercase tracking-wide text-neutral-500 transition hover:text-neutral-900 md:inline">Instructores</a>
          <a href="#precio" class="hidden text-xs font-medium uppercase tracking-wide text-neutral-500 transition hover:text-neutral-900 sm:inline">Precio</a>
          <a :href="checkoutUrl" class="rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-neutral-700">
            Comprar entrada
          </a>
        </nav>
      </div>
    </header>

    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-100 via-neutral-100 to-transparent opacity-70 blur-3xl" />
        <div class="absolute -bottom-24 -right-16 h-[300px] w-[300px] rounded-full bg-neutral-200/60 blur-3xl" />
      </div>

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 shadow-sm">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Taller presencial para CEOs y dueños de empresa
          </span>

          <h1 v-reveal="80" class="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Use la IA para ahorrar horas y dinero en su empresa.
          </h1>

          <p v-reveal="160" class="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Muchos CEOs saben que la IA importa, pero no saben por dónde empezar.
            Mientras tanto, otras empresas ya trabajan más rápido y gastan menos.
            En un día le mostramos qué usar, cuánto cuesta y cómo empezar el lunes.
          </p>

          <dl v-reveal="240" class="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Lugar</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">Ciudad de Guatemala<sup class="ml-0.5 text-neutral-400">(i)</sup></dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Fecha</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">5 de diciembre</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Formato</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">Presencial, un día</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Precio</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">
                <a href="#precio" class="underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900">$799 USD</a>
              </dd>
            </div>
          </dl>
          <p v-reveal="280" class="mt-4 text-xs leading-relaxed text-neutral-500">
            <span class="text-neutral-400">(i)</span> El lugar exacto se envía por correo después de la compra.
          </p>
        </div>

        <PurchaseCard v-reveal="200" />
      </div>
    </section>

    <section aria-label="De un vistazo" class="border-y border-neutral-200 bg-white">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-neutral-200 lg:px-8">
        <article
          v-for="(item, i) in glance"
          :key="item.title"
          v-reveal="i * 80"
          :class="i === 0 ? 'lg:pr-6' : i === glance.length - 1 ? 'lg:pl-6' : 'lg:px-6'"
        >
          <h2 class="text-xs font-semibold uppercase tracking-wide text-neutral-900">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-neutral-500">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="agenda-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">El programa</span>
          <h2 id="agenda-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Un día, de los casos reales a su propia empresa.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">
          No es una charla de ventas. En la mañana vemos casos reales, las herramientas
          que existen y cómo saber si un proyecto deja dinero. Después trabajamos área
          por área. En la tarde vemos reglas, seguridad y respondemos preguntas sobre
          su empresa.
        </p>
      </div>

      <ol class="mt-10 divide-y divide-neutral-200 border-t border-neutral-200">
        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">01</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">30 min</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Cinco casos reales: qué funcionó y qué no
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Empresas que usaron IA, con buenos y malos resultados. Le contamos qué
              hicieron y por qué les fue así.
            </p>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">02</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">30 min</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Las herramientas: qué modelo elegir
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Qué opciones hay hoy y cómo escoger la correcta. Primero, los modelos
              principales. Después, los agentes: sistemas de IA que hacen tareas
              completas dentro de una empresa.
            </p>

            <div class="mt-5">
              <p class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Modelos</p>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li
                  v-for="(mark, i) in models"
                  :key="mark.name"
                  class="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white py-1.5 pl-2 pr-3 transition duration-500 unrevealed:translate-y-1.5 unrevealed:opacity-0"
                  :style="markDelay(i)"
                >
                  <img :src="mark.src" alt="" class="h-5 w-5 shrink-0 object-contain" width="20" height="20">
                  <span class="text-xs font-medium text-neutral-800">
                    {{ mark.name }}<span v-if="mark.house" class="font-normal text-neutral-400"> · {{ mark.house }}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div class="mt-4">
              <p class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Agentes</p>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li
                  v-for="(mark, i) in agents"
                  :key="mark.name"
                  class="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white py-1.5 pl-2 pr-3 transition duration-500 unrevealed:translate-y-1.5 unrevealed:opacity-0"
                  :style="markDelay(models.length + i)"
                >
                  <img :src="mark.src" alt="" class="h-5 w-5 shrink-0 object-contain" width="20" height="20">
                  <span class="text-xs font-medium text-neutral-800">
                    {{ mark.name }}<span v-if="mark.house" class="font-normal text-neutral-400"> · {{ mark.house }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">03</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">30 min</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Los números: ¿el proyecto deja dinero?
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Cómo calcular cuánto cuesta un proyecto de IA, cuántas horas ahorra y en
              qué mes se paga solo.
            </p>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-6">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">04</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">15 min</span>
          </div>
          <h3 class="self-center text-base font-medium text-neutral-500">Café</h3>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">05</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">2 horas</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Ideas para cada área de su empresa
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Finanzas, ventas, operaciones, recursos humanos y servicio al cliente.
              Vemos qué puede hacer la IA en cada una. Es el bloque más largo: sale
              con una lista de tareas para empezar en su área.
            </p>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-6">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">06</span>
          </div>
          <h3 class="self-center text-base font-medium text-neutral-500">Almuerzo</h3>
        </li>

        <li v-reveal class="py-5">
          <p class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">En la tarde</p>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">07</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">30 min</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Cómo organizar la IA en su empresa
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              A quién contratar, qué preguntarle y cómo armar un equipo pequeño que
              funcione. También quién decide qué se puede usar, qué revisa una persona
              y qué no se permite.
            </p>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">08</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">30 min</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Cómo proteger los datos de su empresa
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Qué información sale de la empresa y cuál se queda. Las tres opciones: la
              nube del proveedor, una nube privada o sus propios servidores. Cuál le
              conviene según el costo y las reglas de su sector.
            </p>
          </div>
        </li>

        <li v-reveal class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7">
          <div class="flex items-baseline gap-3 sm:block">
            <span class="text-sm font-semibold tabular-nums text-neutral-300">09</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:mt-1 sm:block">1 hora</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-neutral-900">
              Preguntas sobre su empresa
            </h3>
            <p class="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Traiga su caso. Lo revisamos con usted y le decimos qué probar, qué evitar
              y cuál es el primer paso.
            </p>
          </div>
        </li>
      </ol>
    </section>

    <ImplementationKit />

    <Instructors />

    <section class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
          <div>
            <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              Para quién es
            </span>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Para quien decide en qué invierte la empresa.
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-neutral-300 sm:text-base lg:pt-2">
            Si usted aprueba el presupuesto y la estrategia, este taller es para usted.
            Hablamos de resultados, costos y riesgos, sin lenguaje técnico.
          </p>
        </div>

        <div class="mt-10 grid gap-8 sm:grid-cols-3">
          <article
            v-for="(item, i) in audiences"
            :key="item.title"
            v-reveal="i * 100"
            class="border-t border-neutral-700 pt-5"
          >
            <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-neutral-400">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <Pricing />

    <footer class="border-t border-neutral-200 bg-neutral-50">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Taller Ejecutivo de IA · Guatemala</span>
        <span>5 de diciembre, Ciudad de Guatemala. La hora y el lugar exacto se envían por correo después de la compra.</span>
      </div>
    </footer>
  </div>
</template>
