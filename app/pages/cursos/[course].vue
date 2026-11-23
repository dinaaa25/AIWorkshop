<script setup lang="ts">
const route = useRoute()
const key = String(route.params.course)

if (!isCourseKey(key)) {
  throw createError({ statusCode: 404, statusMessage: 'Capacitación no encontrada', fatal: true })
}

const course = COURSES[key]
const theme = course.theme
const session = computed(() => nextSession(key))
const past = computed(() => pastSessions(key))
const duration = computed(() => (session.value ? durationLabel(session.value) : 'una hora'))

const when = session.value
  ? `${session.value.dateLabel.toLowerCase()}, ${session.value.timeLabel} (${TIME_ZONE_LABEL})`
  : 'próxima fecha por anunciar'

useSeoMeta({
  title: `${course.title} gratuita · Business Context AI`,
  description: `${course.description} Gratis, por Google Meet: ${when}.`,
  ogTitle: `${course.title} gratuita`,
  ogDescription: `${course.description} Gratis, por Google Meet: ${when}.`,
  themeColor: course.mark === 'claude' ? '#d97757' : '#171717',
})

const delay = (index: number) => ({ transitionDelay: `${index * 60}ms` })
</script>

<template>
  <div :class="theme.page" class="min-h-screen">
    <SiteHeader>
      <a href="#inscripcion" :class="[theme.solid, theme.solidHover]" class="rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition">
        Inscribirme
      </a>
    </SiteHeader>

    <section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div :class="theme.glow" class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br to-transparent opacity-70 blur-3xl" />
      </div>

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span v-reveal :class="[theme.border, theme.text]" class="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] shadow-sm">
            <CourseMark :course="key" class="h-3.5 w-3.5" />
            Capacitación gratuita · {{ duration }}
          </span>

          <h1 v-reveal="80" class="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            {{ course.heroPrefix }} <span :class="theme.text">{{ course.heroHighlight }}</span>.
          </h1>

          <p v-reveal="160" class="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {{ course.lead }}
          </p>

          <dl v-reveal="240" class="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Fecha</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">{{ session?.dateLabel ?? 'Por anunciar' }}</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Hora</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">
                <template v-if="session">
                  {{ session.timeLabel }}
                  <span class="block text-xs font-normal text-neutral-400">{{ TIME_ZONE_LABEL }}</span>
                </template>
                <template v-else>—</template>
              </dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Formato</dt>
              <dd class="mt-1 text-sm font-medium text-neutral-800">En línea, Google Meet</dd>
            </div>
            <div>
              <dt class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Precio</dt>
              <dd :class="theme.text" class="mt-1 text-sm font-medium">Gratis</dd>
            </div>
          </dl>

          <p v-if="past.length" v-reveal="300" class="mt-6 text-sm text-neutral-500">
            Ya la dimos {{ past.length === 1 ? 'una vez' : `${past.length} veces` }}:
            <template v-for="(p, i) in past" :key="p.id">{{ i ? ', ' : '' }}{{ p.dateLabel.toLowerCase() }}</template>.
          </p>
        </div>

        <CourseSignupForm v-reveal="200" :course="key" :session="session" />
      </div>
    </section>

    <section aria-label="Beneficios" class="border-y border-neutral-200 bg-white">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-neutral-200 lg:px-8">
        <article
          v-for="(item, i) in course.benefits"
          :key="item.title"
          v-reveal="i * 80"
          :class="i === 0 ? 'lg:pr-6' : i === course.benefits.length - 1 ? 'lg:pl-6' : 'lg:px-6'"
        >
          <span aria-hidden="true" :class="theme.solid" class="block h-0.5 w-6 rounded-full" />
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
            {{ course.topicsTitle }}
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">{{ course.topicsLead }}</p>
      </div>

      <ul v-reveal class="mt-10 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(topic, i) in course.topics"
          :key="topic.title"
          :class="theme.hoverBg"
          class="group bg-white p-6 transition duration-500 unrevealed:translate-y-2 unrevealed:opacity-0"
          :style="delay(i)"
        >
          <span :class="theme.text" class="text-sm font-semibold tabular-nums opacity-60 transition group-hover:opacity-100">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="mt-3 text-base font-semibold text-neutral-900">{{ topic.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ topic.text }}</p>
        </li>
      </ul>
    </section>

    <section v-if="course.agenda" aria-labelledby="agenda-heading" class="bg-neutral-900 text-neutral-50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
          <div>
            <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">El programa</span>
            <h2 id="agenda-heading" class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {{ duration.charAt(0).toUpperCase() + duration.slice(1) }}, directo a lo práctico.
            </h2>
          </div>
          <p class="text-sm leading-relaxed text-neutral-300 sm:text-base lg:pt-2">{{ course.agendaLead }}</p>
        </div>

        <ol class="mt-10 divide-y divide-neutral-700 border-t border-neutral-700">
          <li
            v-for="(item, i) in course.agenda"
            :key="item.title"
            v-reveal="i * 80"
            class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.75rem_1fr] sm:gap-x-6 sm:py-7"
          >
            <div class="flex items-baseline gap-3 sm:block">
              <span class="text-sm font-semibold tabular-nums text-neutral-300">{{ String(i + 1).padStart(2, '0') }}</span>
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

    <!-- Bridge to the core offer -->
    <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div v-reveal class="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-primary-dark">Después de la capacitación</span>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">¿Quiere que lo implementemos por usted?</h2>
          <p class="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
            La capacitación le enseña a usar la herramienta. Si además quiere automatizar un proceso completo de su empresa,
            lo mapeamos en 10 días hábiles y le decimos cuántas horas puede recuperar. Si no encontramos al menos 20 horas al mes, no paga.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <a href="#inscripcion" :class="[theme.solid, theme.solidHover]" class="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition">
            {{ session ? 'Primero, inscribirme gratis' : 'Avíseme de la próxima fecha' }}
          </a>
          <NuxtLink to="/" class="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900">
            Ver el diagnóstico de procesos
          </NuxtLink>
        </div>
      </div>
    </section>

    <SiteFooter :note="course.trademark" />
  </div>
</template>
