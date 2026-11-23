<script setup lang="ts">
import { GUARANTEE, OFFER } from '#shared/utils/servicios'

const featured = computed(() => nextSession())
const featuredCourse = computed(() => (featured.value ? COURSES[featured.value.course] : undefined))
const past = computed(() => pastSessions())

useSeoMeta({
  title: 'Capacitaciones gratuitas de IA · Business Context AI',
  description: 'Capacitaciones gratuitas en línea sobre Claude y agentes de IA (Grok Bot), para equipos y gerentes en Guatemala. Una hora, práctica, por Google Meet.',
  ogTitle: 'Capacitaciones gratuitas de IA · Business Context AI',
  ogDescription: 'Aprenda a usar Claude y agentes de IA en su trabajo. Gratis, en línea, una hora.',
})

const ladder = [
  { step: 'Gratis', title: 'Capacitación en línea', text: 'Una hora para aprender la herramienta con ejemplos reales. Usted decide qué aplicar.' },
  { step: `${OFFER.diagnosticoDias} días`, title: 'Diagnóstico de un proceso', text: `Mapeamos el proceso que más horas le cuesta y le decimos cuánto puede ahorrar. ${OFFER.precioDiagnostico}, con garantía.` },
  { step: '3–8 semanas', title: 'Implementación', text: 'Lo dejamos funcionando con sus documentos reales y su equipo capacitado.' },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <SiteHeader />

    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-soft via-neutral-100 to-transparent opacity-70 blur-3xl" />
      </div>

      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <span v-reveal class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 shadow-sm">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Capacitaciones gratuitas · en línea
        </span>
        <h1 v-reveal="80" class="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl">
          Aprenda a usar IA en su trabajo, gratis, en una hora.
        </h1>
        <p v-reveal="160" class="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Alternamos dos capacitaciones prácticas: <strong class="font-semibold text-neutral-900">Claude</strong>, el asistente de
          Anthropic, y <strong class="font-semibold text-neutral-900">agentes de IA con Grok Bot</strong>. Sin teoría de más: demostraciones
          en vivo que usted puede repetir al terminar.
        </p>
      </div>
    </section>

    <!-- Featured: next session -->
    <section v-if="featured && featuredCourse" aria-labelledby="featured-heading" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div :class="featuredCourse.theme.page" class="grid gap-8 rounded-3xl border border-neutral-200 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
        <div v-reveal>
          <span :class="featuredCourse.theme.text" class="text-[11px] font-semibold uppercase tracking-[0.16em]">Próxima capacitación</span>
          <h2 id="featured-heading" class="mt-2 flex items-center gap-3 text-3xl font-semibold tracking-tight text-neutral-900">
            <span :class="featuredCourse.theme.solid" class="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white">
              <CourseMark :course="featuredCourse.key" class="h-5 w-5" />
            </span>
            {{ featuredCourse.title }}
          </h2>
          <p class="mt-4 text-base text-neutral-800">
            <strong class="font-semibold">{{ featured.dateLabel }}</strong> · {{ featured.timeLabel }}
            <span class="text-neutral-500">({{ TIME_ZONE_LABEL }}) · {{ durationLabel(featured) }} · Google Meet</span>
          </p>
          <p class="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{{ featuredCourse.lead }}</p>
          <ul class="mt-6 grid gap-2 sm:grid-cols-2">
            <li v-for="t in featuredCourse.topics.slice(0, 6)" :key="t.title" class="flex gap-2 text-sm text-neutral-700">
              <span aria-hidden="true" :class="featuredCourse.theme.text">✓</span>{{ t.title }}
            </li>
          </ul>
          <NuxtLink :to="`/cursos/${featuredCourse.key}`" :class="featuredCourse.theme.text" class="mt-6 inline-block text-sm font-semibold underline underline-offset-4">
            Ver el programa completo →
          </NuxtLink>
        </div>
        <CourseSignupForm v-reveal="120" :course="featuredCourse.key" :session="featured" />
      </div>
    </section>

    <!-- All courses -->
    <section aria-labelledby="todas-heading" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <h2 id="todas-heading" v-reveal class="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Las capacitaciones</h2>
      <p v-reveal class="mt-2 text-sm text-neutral-600">Se repiten cada pocas semanas. Si no hay fecha, deje su correo y le avisamos.</p>
      <CourseCards v-reveal class="mt-8" />

      <div v-if="past.length" v-reveal class="mt-10">
        <h3 class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Ya realizadas</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="p in past" :key="p.id" class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600">
            <span aria-hidden="true" class="text-emerald-600">✓</span>
            {{ COURSES[p.course].title }} · {{ p.dateLabel }}
          </li>
        </ul>
      </div>
    </section>

    <!-- What's next: value ladder -->
    <section aria-labelledby="despues-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div v-reveal class="max-w-2xl">
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Y después</span>
          <h2 id="despues-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cuando quiera ir más allá, lo implementamos por usted.
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            Varios asistentes a nuestras capacitaciones nos pidieron después automatizar un proceso de su empresa. Así es el camino:
          </p>
        </div>
        <ol class="mt-10 grid gap-6 md:grid-cols-3">
          <li v-for="(l, i) in ladder" :key="l.title" v-reveal="i * 100" class="border-t border-neutral-700 pt-5">
            <span class="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">{{ l.step }}</span>
            <h3 class="mt-2 text-lg font-semibold text-white">{{ l.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-neutral-400">{{ l.text }}</p>
          </li>
        </ol>
        <p v-reveal class="mt-8 max-w-3xl rounded-2xl bg-neutral-800 p-5 text-sm leading-relaxed text-neutral-300">
          <strong class="text-white">{{ GUARANTEE.title }}.</strong> {{ GUARANTEE.text }}
        </p>
        <NuxtLink v-reveal to="/" class="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark">
          Ver servicios y diagnóstico
        </NuxtLink>
      </div>
    </section>

    <SiteFooter note="Claude es una marca de Anthropic. Grok es una marca de xAI. Estas capacitaciones son independientes de ambas empresas." />
  </div>
</template>
