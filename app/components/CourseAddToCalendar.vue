<script setup lang="ts">
const props = defineProps<{ session: Session }>()

const theme = computed(() => COURSES[props.session.course].theme)
const options = computed(() => [
  { label: 'Google Calendar', href: sessionGoogleUrl(props.session), external: true },
  { label: 'Apple / iCal', href: sessionIcsPath(props.session), external: false },
  { label: 'Outlook', href: sessionOutlookUrl(props.session), external: true },
])
</script>

<template>
  <div>
    <p class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Agregar a mi calendario</p>
    <ul class="mt-3 grid gap-2 sm:grid-cols-3">
      <li v-for="option in options" :key="option.label">
        <a
          :href="option.href"
          :target="option.external ? '_blank' : undefined"
          :rel="option.external ? 'noopener' : undefined"
          :download="option.external ? undefined : `${session.id}.ics`"
          class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" :class="theme.text" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
            <path d="M2.5 6.5h11M5.5 2v3M10.5 2v3M8 8.5v3M6.5 10h3" />
          </svg>
          {{ option.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
