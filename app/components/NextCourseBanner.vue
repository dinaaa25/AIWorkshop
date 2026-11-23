<script setup lang="ts">
/** Features the next free course session. Renders nothing when none is scheduled. */
const props = defineProps<{ course?: CourseKey }>()

const session = computed(() => nextSession(props.course))
const course = computed(() => (session.value ? COURSES[session.value.course] : undefined))
</script>

<template>
  <section v-if="session && course" aria-label="Próxima capacitación gratuita" class="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
    <NuxtLink
      v-reveal
      :to="`/cursos/${course.key}`"
      :class="[course.theme.border, course.theme.shadow]"
      class="group flex flex-col gap-5 rounded-3xl border bg-white p-5 shadow-lg transition hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div class="flex min-w-0 items-center gap-4 sm:gap-5">
        <span :class="course.theme.solid" class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white sm:h-14 sm:w-14">
          <CourseMark :course="course.key" class="h-6 w-6 sm:h-7 sm:w-7" />
        </span>
        <div class="min-w-0">
          <p :class="course.theme.text" class="text-[11px] font-semibold uppercase tracking-[0.16em]">
            Capacitación gratuita · {{ durationLabel(session) }} · en línea
          </p>
          <p class="mt-1 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">{{ course.title }}</p>
          <p class="mt-0.5 text-sm text-neutral-600">
            {{ session.dateLabel }} · {{ session.timeLabel }} <span class="text-neutral-400">({{ TIME_ZONE_LABEL }})</span>
          </p>
        </div>
      </div>
      <span
        :class="[course.theme.solid, course.theme.solidHover]"
        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition"
      >
        Inscribirme gratis
        <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </NuxtLink>
  </section>
</template>
