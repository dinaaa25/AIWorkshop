<script setup lang="ts">
useSeoMeta({
  title: 'Inscripción confirmada · Business Context AI',
  robots: 'noindex',
})

const route = useRoute()
const sessionId = String(route.query.s || '')
const session = sessionById(sessionId)
const waitlistCourse = parseWaitlistId(sessionId)
const courseKey = session?.course ?? waitlistCourse
const course = courseKey ? COURSES[courseKey] : undefined
const theme = course?.theme

const signup = useState<{ email: string, duplicate: boolean } | null>('course-signup', () => null)

const heading = computed(() => {
  if (waitlistCourse) {
    return 'Listo, le avisaremos.'
  }
  return signup.value?.duplicate ? 'Ya estaba inscrito en esta capacitación.' : '¡Listo, ya está inscrito!'
})
</script>

<template>
  <div :class="theme?.page ?? 'bg-neutral-50'" class="flex min-h-screen flex-col">
    <SiteHeader />

    <main class="relative flex-1 overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div :class="theme?.glow ?? 'from-primary-soft via-neutral-100'" class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br to-transparent opacity-70 blur-3xl" />
      </div>

      <div v-if="course && theme" class="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <div v-reveal>
          <span :class="[theme.solid, theme.shadow]" class="mx-auto grid h-16 w-16 place-items-center rounded-full text-white shadow-lg transition duration-700 unrevealed:scale-50">
            <svg aria-hidden="true" viewBox="0 0 12 12" class="h-7 w-7 transition duration-500 unrevealed:scale-0" style="transition-delay: 250ms" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.5 6.5l2.5 2.5 4.5-5" />
            </svg>
          </span>
        </div>

        <h1 v-reveal="120" class="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">{{ heading }}</h1>
        <p v-reveal="200" class="mt-4 text-base leading-relaxed text-neutral-600">
          <template v-if="session">
            Guardamos su lugar<template v-if="signup?.email"> con el correo <strong class="font-semibold text-neutral-900">{{ signup.email }}</strong></template>.
            Agregue la capacitación a su calendario para no olvidarla.
          </template>
          <template v-else>
            Le escribiremos<template v-if="signup?.email"> a <strong class="font-semibold text-neutral-900">{{ signup.email }}</strong></template>
            en cuanto haya una nueva fecha de la {{ course.title.toLowerCase() }}.
          </template>
        </p>

        <section v-if="session" v-reveal="280" aria-label="Detalles de la capacitación" :class="theme.shadow" class="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-xl sm:p-7">
          <div class="flex items-start gap-4">
            <span :class="theme.solid" class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white">
              <CourseMark :course="course.key" class="h-5 w-5" />
            </span>
            <div>
              <h2 class="text-lg font-semibold tracking-tight text-neutral-900">{{ course.title }}</h2>
              <p class="mt-1 text-sm text-neutral-600">
                {{ session.dateLabel }} · {{ session.timeLabel }}
                <span class="text-neutral-400">({{ TIME_ZONE_LABEL }})</span>
              </p>
              <p class="mt-0.5 text-sm text-neutral-600">En línea por Google Meet</p>
            </div>
          </div>

          <a
            :href="session.meetUrl"
            target="_blank"
            rel="noopener"
            :class="[theme.solid, theme.solidHover]"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition"
          >
            Unirse por Google Meet
            <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <p class="mt-2 text-center text-xs text-neutral-400">{{ session.meetUrl.replace('https://', '') }}</p>

          <CourseAddToCalendar :session="session" class="mt-6 border-t border-neutral-100 pt-6" />

          <p v-if="course.prepNote" :class="theme.page" class="mt-6 rounded-2xl p-4 text-sm leading-relaxed text-neutral-600">
            {{ course.prepNote.before }}
            <a :href="course.prepNote.href" target="_blank" rel="noopener" :class="theme.text" class="font-medium underline underline-offset-4">{{ course.prepNote.linkLabel }}</a>
            {{ course.prepNote.after }}
          </p>
        </section>

        <CourseQualifyForm v-reveal="340" class="mt-8" :session-id="sessionId" :email="signup?.email" />

        <div v-reveal="400" class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink to="/cursos" class="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400">
            Ver todas las capacitaciones
          </NuxtLink>
          <NuxtLink to="/" class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
            Conocer Business Context AI
          </NuxtLink>
        </div>
      </div>

      <div v-else class="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <h1 class="text-3xl font-semibold tracking-tight text-neutral-900">Vea las próximas capacitaciones</h1>
        <p class="mt-4 text-neutral-600">No encontramos esa inscripción. Revise las fechas disponibles e inscríbase gratis.</p>
        <NuxtLink to="/cursos" class="mt-8 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white">
          Ver capacitaciones
        </NuxtLink>
      </div>
    </main>

    <SiteFooter :note="course?.trademark" />
  </div>
</template>
