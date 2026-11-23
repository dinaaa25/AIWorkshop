<script setup lang="ts">
import {
  BEFORE_AFTER,
  BRAND,
  CTA,
  DATA_SECTION,
  EXAMPLES,
  FAQ,
  GUARANTEE,
  HERO,
  OFFER,
  PROOF,
  SERVICES,
  STEPS,
  TOOLS,
  TRAINING,
} from '#shared/utils/servicios'

useSeoMeta({
  title: 'Business Context AI · Automatización de procesos con IA',
  description: HERO.lead,
  ogTitle: 'Business Context AI · Recupere las horas que su equipo pierde en procesos repetitivos',
  ogDescription: HERO.lead,
  ogType: 'website',
})

const kpis = [
  { label: 'Ventas del mes', value: 'Q 1.84M', delta: '+12%' },
  { label: 'Cuentas por cobrar', value: 'Q 412K', delta: '−8%' },
  { label: 'Órdenes abiertas', value: '37', delta: 'hoy' },
]
const bars = [42, 58, 51, 67, 73, 64, 82, 88]

const diagnostico = SERVICES[0]!
const nextServices = SERVICES.slice(1)

const upcoming = computed(() => nextSession())
const freeCtaTo = computed(() => (upcoming.value ? `/cursos/${upcoming.value.course}` : '/cursos'))
const pastCount = computed(() => pastSessions().length)

const proofStats = computed(() => [
  PROOF.personasCapacitadas ? { value: String(PROOF.personasCapacitadas), label: 'personas capacitadas' } : null,
  PROOF.empresas ? { value: String(PROOF.empresas), label: 'empresas representadas' } : null,
  PROOF.personasCapacitadas && pastCount.value ? { value: String(pastCount.value), label: 'capacitaciones gratuitas realizadas' } : null,
].filter(Boolean) as { value: string, label: string }[])
const showProof = computed(() => proofStats.value.length > 0 || PROOF.testimonios.length > 0 || PROOF.industrias.length > 0)
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <SiteHeader />

    <!-- Hero -->
    <section id="top" class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-soft via-neutral-100 to-transparent opacity-70 blur-3xl" />
        <div class="absolute -bottom-24 -right-16 h-[300px] w-[300px] rounded-full bg-neutral-200/60 blur-3xl" />
      </div>

      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 shadow-sm">
          <span class="h-1.5 w-1.5 rounded-full bg-primary" />
          {{ HERO.eyebrow }}
        </span>
        <h1 v-reveal="80" class="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          {{ HERO.title }}
        </h1>
        <p v-reveal="160" class="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          {{ HERO.lead }}
        </p>
        <div v-reveal="240" class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contacto" class="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark">
            {{ HERO.cta }}
          </a>
          <NuxtLink :to="freeCtaTo" class="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900">
            {{ HERO.freeCta }} <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
        <p v-reveal="270" class="mt-4 text-xs text-neutral-500">
          <a :href="BRAND.pdfPath" download class="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900">Descargar resumen en PDF</a>
        </p>
        <dl v-reveal="300" class="mt-10 grid max-w-3xl grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
          <div>
            <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Diagnóstico</dt>
            <dd class="mt-1 text-sm font-medium text-neutral-800">{{ OFFER.diagnosticoDias }} días hábiles</dd>
          </div>
          <div>
            <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Su esfuerzo</dt>
            <dd class="mt-1 text-sm font-medium text-neutral-800">{{ OFFER.tiempoEquipo }} con su equipo</dd>
          </div>
          <div>
            <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Inversión</dt>
            <dd class="mt-1 text-sm font-medium text-neutral-800">{{ OFFER.precioDiagnostico }}</dd>
          </div>
          <div>
            <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Garantía</dt>
            <dd class="mt-1 text-sm font-medium text-neutral-800">Sin ahorro, no paga</dd>
          </div>
        </dl>
      </div>
    </section>

    <NextCourseBanner class="-mt-6 pb-10 sm:-mt-10 lg:-mt-14" />

    <!-- Proof: only renders what is filled in shared/utils/servicios.ts → PROOF -->
    <section v-if="showProof" aria-label="Resultados" class="border-t border-neutral-200 bg-white">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <dl v-if="proofStats.length" v-reveal class="grid grid-cols-3 gap-4">
          <div v-for="stat in proofStats" :key="stat.label" class="flex flex-col">
            <dt class="order-2 text-xs leading-snug text-neutral-500">{{ stat.label }}</dt>
            <dd class="text-3xl font-semibold tracking-tight text-neutral-900">{{ stat.value }}</dd>
          </div>
        </dl>
        <div v-reveal="100" class="grid gap-4">
          <figure v-for="t in PROOF.testimonios" :key="t.name" class="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote class="text-sm leading-relaxed text-neutral-800">“{{ t.quote }}”</blockquote>
            <figcaption class="mt-3 text-xs text-neutral-500"><strong class="font-semibold text-neutral-900">{{ t.name }}</strong> · {{ t.role }}</figcaption>
          </figure>
          <p v-if="PROOF.industrias.length" class="text-xs text-neutral-500">
            Han participado equipos de: <span class="text-neutral-800">{{ PROOF.industrias.join(' · ') }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Before / after -->
    <section aria-labelledby="antes-heading" class="border-y border-neutral-200 bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div v-reveal class="max-w-2xl">
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">El problema</span>
          <h2 id="antes-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Su equipo es bueno. Su tiempo se va en copiar, revisar y cuadrar.
          </h2>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div v-reveal class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 class="text-xs font-semibold uppercase tracking-wide text-neutral-500">Hoy</h3>
            <ul class="mt-4 grid gap-3">
              <li v-for="item in BEFORE_AFTER.before" :key="item" class="flex gap-3 text-sm leading-relaxed text-neutral-600">
                <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div v-reveal="100" class="rounded-2xl border border-primary/30 bg-primary-soft/70 p-6">
            <h3 class="text-xs font-semibold uppercase tracking-wide text-primary-dark">Con IA</h3>
            <ul class="mt-4 grid gap-3">
              <li v-for="item in BEFORE_AFTER.after" :key="item" class="flex gap-3 text-sm leading-relaxed text-neutral-800">
                <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section aria-labelledby="como-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Cómo funciona</span>
          <h2 id="como-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Usted trae el proceso. Nosotros hacemos el resto.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">
          No empezamos por la tecnología. Empezamos por el proceso que le cuesta horas
          y dinero, medimos cuánto, y solo entonces decidimos qué parte hace la IA.
        </p>
      </div>
      <ol class="mt-10 grid gap-6 md:grid-cols-3">
        <li v-for="(step, i) in STEPS" :key="step.title" v-reveal="i * 100" class="border-t border-neutral-200 pt-5">
          <span class="text-sm font-semibold tabular-nums text-neutral-300">0{{ i + 1 }}</span>
          <h3 class="mt-2 text-lg font-semibold text-neutral-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ step.text }}</p>
        </li>
      </ol>
    </section>

    <!-- Examples -->
    <section id="ejemplos" aria-labelledby="ejemplos-heading" class="border-y border-neutral-200 bg-white">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="max-w-2xl">
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Ejemplos</span>
          <h2 id="ejemplos-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Procesos que ya automatizamos.
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Los construimos primero para nuestra propia operación agroexportadora. Ahora los adaptamos a su empresa.
          </p>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="(ex, i) in EXAMPLES"
            :key="ex.title"
            v-reveal="(i % 2) * 100"
            class="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <span class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">{{ ex.subtitle }}</span>
            <h3 class="mt-1 text-xl font-semibold text-neutral-900">{{ ex.title }}</h3>
            <ol class="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-neutral-700">
              <template v-for="(node, n) in ex.flow" :key="node">
                <li class="rounded-md border border-neutral-200 bg-white px-2 py-1">{{ node }}</li>
                <li v-if="n < ex.flow.length - 1" aria-hidden="true" class="text-neutral-300">→</li>
              </template>
            </ol>
            <dl class="mt-5 grid gap-3 text-sm leading-relaxed">
              <div>
                <dt class="text-xs font-semibold uppercase tracking-wide text-neutral-400">Antes</dt>
                <dd class="mt-1 text-neutral-600">{{ ex.before }}</dd>
              </div>
              <div>
                <dt class="text-xs font-semibold uppercase tracking-wide text-primary-dark">Después</dt>
                <dd class="mt-1 text-neutral-800">{{ ex.after }}</dd>
              </div>
            </dl>
          </article>
        </div>

        <div v-reveal class="mt-12 border-t border-neutral-200 pt-8">
          <p class="text-sm font-medium text-neutral-900">Elegimos la herramienta según su proceso, no al revés.</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tool in TOOLS"
              :key="tool.name"
              class="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white py-1.5 pl-2 pr-3"
            >
              <img v-if="tool.src" :src="tool.src" alt="" class="h-5 w-5 shrink-0 object-contain" width="20" height="20">
              <span v-else aria-hidden="true" class="grid h-5 w-5 shrink-0 place-items-center rounded bg-neutral-900 text-[10px] font-bold text-white">{{ tool.name.slice(0, 1) }}</span>
              <span class="text-xs font-medium text-neutral-800">
                {{ tool.name }}<span class="font-normal text-neutral-400"> · {{ tool.note }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Bridge: from process automation to data -->
    <section aria-labelledby="puente-heading" class="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      <div v-reveal class="max-w-3xl">
        <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">{{ DATA_SECTION.bridgeEyebrow }}</span>
        <h2 id="puente-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {{ DATA_SECTION.bridgeTitle }}
        </h2>
      </div>
    </section>

    <!-- Data -->
    <section aria-labelledby="datos-heading" class="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:pb-24">
      <div class="grid gap-10 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div v-reveal>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-primary-dark">{{ DATA_SECTION.eyebrow }}</span>
          <h3 id="datos-heading" class="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {{ DATA_SECTION.title }}
          </h3>
          <p class="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{{ DATA_SECTION.problem }}</p>
          <p class="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{{ DATA_SECTION.lead }}</p>
          <ol class="mt-8 grid gap-5">
            <li v-for="(s, i) in DATA_SECTION.steps" :key="s.title" class="flex gap-4">
              <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-white">{{ i + 1 }}</span>
              <div>
                <h4 class="text-base font-semibold text-neutral-900">{{ s.title }}</h4>
                <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ s.text }}</p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Dashboard mockup -->
        <div v-reveal="120" aria-hidden="true" class="rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-900/5 sm:p-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-neutral-900">Dashboard de gestión</span>
            <span class="inline-flex items-center gap-1.5 text-[10px] font-medium text-primary-dark">
              <span class="h-1.5 w-1.5 rounded-full bg-primary" /> Actualizado hoy, 7:00
            </span>
          </div>
          <div class="mt-4 grid grid-cols-3 gap-2">
            <div v-for="k in kpis" :key="k.label" class="rounded-xl bg-neutral-50 p-3">
              <p class="text-[10px] text-neutral-500">{{ k.label }}</p>
              <p class="mt-1 text-sm font-semibold text-neutral-900 sm:text-base">{{ k.value }}</p>
              <p class="text-[10px] font-medium text-primary-dark">{{ k.delta }}</p>
            </div>
          </div>
          <div class="mt-4 flex h-28 items-end gap-2 rounded-xl bg-neutral-50 p-3">
            <div v-for="(b, i) in bars" :key="i" class="flex-1 rounded-t bg-primary/85" :style="{ height: `${b}%` }" />
          </div>
          <div class="mt-4 rounded-xl border border-neutral-200 p-3">
            <p class="text-[11px] text-neutral-500">Pregunta</p>
            <p class="text-sm font-medium text-neutral-900">¿Qué clientes compraron menos este mes?</p>
            <p class="mt-2 text-[11px] text-neutral-500">Agente</p>
            <p class="text-sm text-neutral-700">Tres clientes bajaron más de 20% frente al mes anterior. El mayor cambio fue en…</p>
          </div>
        </div>

        <div v-reveal class="grid gap-8 border-t border-neutral-200 pt-8 lg:col-span-2 lg:grid-cols-2 lg:gap-16">
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wide text-neutral-500">Lo que obtiene</h4>
            <ul class="mt-4 grid gap-2.5">
              <li v-for="o in DATA_SECTION.outcomes" :key="o" class="flex gap-2.5 text-sm leading-relaxed text-neutral-700">
                <span aria-hidden="true" class="text-primary">✓</span>
                {{ o }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wide text-neutral-500">Preguntas que su equipo podrá hacerle a sus datos</h4>
            <ul class="mt-4 grid gap-2">
              <li v-for="q in DATA_SECTION.questions" :key="q" class="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800">
                {{ q }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="servicios" aria-labelledby="servicios-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="max-w-2xl">
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Servicios</span>
          <h2 id="servicios-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Empiece con un proceso. Crezca cuando vea el resultado.
          </h2>
        </div>
        <!-- Step 1: the diagnostic -->
        <h3 v-reveal class="mt-10 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Paso 1 · Primero entendemos su proceso</h3>
        <article v-reveal class="mt-4 grid gap-8 rounded-2xl bg-white p-6 text-neutral-900 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <span class="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-dark">{{ diagnostico.tag }}</span>
            <h4 class="mt-4 text-2xl font-semibold">{{ diagnostico.name }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">{{ diagnostico.promise }}</p>
            <ul class="mt-5 grid gap-2 border-t border-neutral-200 pt-4">
              <li v-for="d in diagnostico.deliverables" :key="d" class="flex gap-2.5 text-sm leading-relaxed text-neutral-700">
                <span aria-hidden="true" class="text-primary">✓</span>
                {{ d }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col justify-between gap-4">
            <div>
              <p class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Inversión</p>
              <p class="mt-1 text-4xl font-semibold tracking-tight text-neutral-900">{{ OFFER.precioDiagnostico }}</p>
              <p class="mt-1 text-sm text-neutral-500">Precio fijo. Se descuenta completo si implementa con nosotros.</p>
              <p class="mt-3 text-sm text-neutral-600">Su tiempo: {{ OFFER.tiempoEquipo }} con su equipo y {{ OFFER.tiempoGerencia }} con la gerencia.</p>
            </div>
            <div class="rounded-xl bg-primary-soft p-5">
              <p class="text-xs font-semibold uppercase tracking-wide text-primary-dark">{{ GUARANTEE.title }}</p>
              <p class="mt-1.5 text-sm leading-relaxed text-primary-ink">{{ GUARANTEE.text }}</p>
            </div>
            <p v-if="OFFER.cuposPorMes" class="text-xs text-neutral-500">
              Tomamos {{ OFFER.cuposPorMes }} diagnósticos por mes para atender cada uno a fondo.
            </p>
            <a href="#contacto" class="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
              {{ HERO.cta }}
            </a>
          </div>
        </article>

        <!-- Step 2: what follows, as a vertical list -->
        <h3 v-reveal class="mt-14 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Paso 2 · Después del diagnóstico, según lo que necesite</h3>
        <ol class="mt-4 divide-y divide-neutral-700 border-y border-neutral-700">
          <li
            v-for="(svc, i) in nextServices"
            :key="svc.name"
            v-reveal
            class="grid gap-3 py-7 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_0.9fr_1.1fr] lg:gap-x-10"
          >
            <span class="text-sm font-semibold tabular-nums text-neutral-500">0{{ i + 1 }}</span>
            <div>
              <span class="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400">{{ svc.tag }}</span>
              <h4 class="mt-1 text-xl font-semibold text-white">{{ svc.name }}</h4>
              <p class="mt-2 text-sm leading-relaxed text-neutral-300">{{ svc.promise }}</p>
            </div>
            <ul class="grid content-start gap-1.5 sm:col-start-2 lg:col-start-3">
              <li v-for="d in svc.deliverables" :key="d" class="flex gap-2.5 text-sm leading-relaxed text-neutral-400">
                <span aria-hidden="true" class="text-neutral-500">✓</span>
                {{ d }}
              </li>
            </ul>
          </li>
        </ol>
        <p v-reveal class="mt-8 max-w-3xl text-sm leading-relaxed text-neutral-400">
          {{ GUARANTEE.implementation }}
        </p>
      </div>
    </section>

    <!-- Training: free courses (lead magnet) + in-company training -->
    <section id="capacitaciones" aria-labelledby="capacitacion-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="max-w-3xl">
        <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">{{ TRAINING.eyebrow }}</span>
        <h2 id="capacitacion-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {{ TRAINING.title }}
        </h2>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div v-reveal>
          <h3 class="text-lg font-semibold text-neutral-900">{{ TRAINING.freeTitle }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{{ TRAINING.freeLead }}</p>
          <NuxtLink to="/cursos" class="mt-4 inline-block text-sm font-semibold text-primary-dark underline underline-offset-4">Ver todas las fechas →</NuxtLink>
        </div>
        <CourseCards v-reveal="100" />
      </div>

      <div class="mt-14 grid gap-4 border-t border-neutral-200 pt-10 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div v-reveal>
          <h3 class="text-lg font-semibold text-neutral-900">{{ TRAINING.companyTitle }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{{ TRAINING.lead }}</p>
        </div>
        <div class="grid gap-8 sm:grid-cols-3">
          <article v-for="(p, i) in TRAINING.points" :key="p.title" v-reveal="i * 100" class="border-t border-neutral-200 pt-5 sm:border-t-0 sm:pt-0">
            <h4 class="text-base font-semibold text-neutral-900">{{ p.title }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ p.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section aria-labelledby="faq-heading" class="border-t border-neutral-200 bg-white">
      <div class="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h2 id="faq-heading" v-reveal class="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Preguntas frecuentes</h2>
        <div class="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
          <details v-for="item in FAQ" :key="item.q" class="group py-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-neutral-900">
              {{ item.q }}
              <span aria-hidden="true" class="text-neutral-400 transition group-open:rotate-45">+</span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-neutral-600">{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contacto" aria-labelledby="contacto-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div v-reveal>
          <img src="/bcai-mark-light.svg" alt="Business Context AI" class="mb-6 h-12 w-12" width="48" height="48">
          <span class="block text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Siguiente paso</span>
          <h2 id="contacto-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ CTA.title }}</h2>
          <p class="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">{{ CTA.text }}</p>
          <p class="mt-6 text-sm text-neutral-400">
            O escríbanos a
            <a :href="`mailto:${BRAND.email}`" class="font-medium text-white underline decoration-neutral-600 underline-offset-4 hover:decoration-white">{{ BRAND.email }}</a>
          </p>
        </div>
        <ServiciosContactForm v-reveal="120" />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
