<script setup lang="ts">
/** One card per free course: next date (or "notify me") and how many times it has run. */
withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })

const cards = computed(() => COURSE_KEYS.map(key => ({
  course: COURSES[key],
  next: nextSession(key),
  past: pastSessions(key),
})))
</script>

<template>
  <ul class="grid gap-4 md:grid-cols-2">
    <li v-for="{ course, next, past } in cards" :key="course.key">
      <NuxtLink
        :to="`/cursos/${course.key}`"
        :class="dark ? 'border-neutral-700 bg-neutral-800/60 hover:border-neutral-500' : 'border-neutral-200 bg-white hover:border-neutral-400'"
        class="group flex h-full flex-col rounded-2xl border p-6 transition"
      >
        <div class="flex items-center gap-3">
          <span :class="course.theme.solid" class="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white ring-1 ring-white/10">
            <CourseMark :course="course.key" class="h-5 w-5" />
          </span>
          <div>
            <p :class="dark ? 'text-white' : 'text-neutral-900'" class="text-lg font-semibold">{{ course.title }}</p>
            <p class="text-xs text-neutral-400">
              Gratis · en línea<template v-if="past.length"> · {{ past.length }} {{ past.length === 1 ? 'edición realizada' : 'ediciones realizadas' }}</template>
            </p>
          </div>
        </div>
        <p :class="dark ? 'text-neutral-300' : 'text-neutral-600'" class="mt-4 flex-1 text-sm leading-relaxed">{{ course.description }}</p>
        <div :class="dark ? 'border-neutral-700' : 'border-neutral-200'" class="mt-5 flex items-center justify-between gap-3 border-t pt-4">
          <p class="text-sm">
            <template v-if="next">
              <span class="block text-[11px] font-medium uppercase tracking-wide text-neutral-400">Próxima fecha</span>
              <span :class="dark ? 'text-white' : 'text-neutral-900'" class="font-medium">{{ next.dateLabel }} · {{ next.timeLabel }}</span>
            </template>
            <template v-else>
              <span class="block text-[11px] font-medium uppercase tracking-wide text-neutral-400">Próxima fecha</span>
              <span :class="dark ? 'text-neutral-300' : 'text-neutral-600'">Por anunciar</span>
            </template>
          </p>
          <span
            :class="next ? [course.theme.solid, 'text-white'] : (dark ? 'bg-neutral-700 text-white' : 'bg-neutral-100 text-neutral-900')"
            class="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition group-hover:opacity-90"
          >
            {{ next ? 'Inscribirme' : 'Avíseme' }}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
