<script setup lang="ts">
/** Email-only signup for a session. With no session scheduled it becomes a "notify me" form. */
const props = defineProps<{ course: CourseKey, session?: Session }>()

const email = ref('')
const website = ref('')
const status = ref<'idle' | 'loading' | 'error'>('idle')
const message = ref('')
const signup = useState<{ email: string, duplicate: boolean } | null>('course-signup', () => null)

const info = computed(() => COURSES[props.course])
const theme = computed(() => info.value.theme)
const sessionId = computed(() => props.session?.id ?? waitlistId(props.course))

async function submit() {
  if (status.value === 'loading') {
    return
  }

  status.value = 'loading'
  message.value = ''

  try {
    const result = await $fetch<{ ok: boolean, duplicate: boolean }>('/api/curso', {
      method: 'POST',
      body: { email: email.value, sessionId: sessionId.value, website: website.value },
    })

    signup.value = { email: email.value.trim().toLowerCase(), duplicate: result.duplicate }
    track('course_signup', { session_id: sessionId.value, course: props.course, duplicate: result.duplicate, waitlist: !props.session })
    await navigateTo({ path: '/cursos/confirmacion', query: { s: sessionId.value } })
  }
  catch (error: unknown) {
    status.value = 'error'
    const fetchError = error as { data?: { statusMessage?: string, message?: string }, statusMessage?: string }
    message.value
      = fetchError.data?.statusMessage
        || fetchError.data?.message
        || fetchError.statusMessage
        || 'No pudimos guardar su correo. Inténtelo de nuevo.'
  }
}
</script>

<template>
  <aside
    id="inscripcion"
    aria-labelledby="signup-heading"
    :class="theme.shadow"
    class="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8 lg:sticky lg:top-24"
  >
    <div class="flex items-center justify-between gap-3">
      <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
        {{ session ? 'Inscripción' : 'Próxima fecha' }}
      </span>
      <span :class="[theme.soft, theme.text]" class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium">
        <span :class="theme.solid" class="h-1.5 w-1.5 rounded-full" />
        Gratis
      </span>
    </div>

    <h2 id="signup-heading" class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
      {{ session ? 'Reserve su lugar.' : 'Avíseme de la próxima fecha.' }}
    </h2>
    <p class="mt-3 text-sm leading-relaxed text-neutral-500">
      <template v-if="session">
        {{ session.dateLabel }} · {{ session.timeLabel }} ({{ TIME_ZONE_LABEL }}), por Google Meet.
        Deje su correo para reservar su lugar y recibir el enlace para agregarla a su calendario.
      </template>
      <template v-else>
        Repetimos esta capacitación cada pocas semanas. Deje su correo y le escribimos en cuanto haya fecha.
      </template>
    </p>

    <form class="mt-6 grid gap-4" @submit.prevent="submit">
      <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
        Correo electrónico
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          required
          maxlength="160"
          placeholder="usted@empresa.com"
          :class="theme.focus"
          class="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:bg-white focus:outline-none focus:ring-2"
        >
      </label>
      <label class="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        Sitio web
        <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off">
      </label>
      <button
        type="submit"
        :disabled="status === 'loading'"
        :class="[theme.solid, theme.solidHover]"
        class="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-wait disabled:opacity-60"
      >
        <template v-if="status === 'loading'">Enviando…</template>
        <template v-else>{{ session ? 'Inscribirme gratis' : 'Avisarme' }}</template>
        <svg v-if="status !== 'loading'" aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
    </form>

    <p v-if="status === 'error'" role="alert" class="mt-4 text-sm leading-relaxed text-red-600">
      {{ message }}
    </p>

    <p class="mt-5 text-xs leading-relaxed text-neutral-400">
      Usamos su correo para esta capacitación y para avisarle de las próximas. Sin spam.
    </p>
  </aside>
</template>
