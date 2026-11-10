<script setup lang="ts">
const email = ref('')
const website = ref('')
const status = ref<'idle' | 'loading' | 'error'>('idle')
const message = ref('')
const signup = useState<{ email: string, duplicate: boolean } | null>('agentes-signup', () => null)

async function submit() {
  if (status.value === 'loading') {
    return
  }

  status.value = 'loading'
  message.value = ''

  try {
    const result = await $fetch<{ ok: boolean, duplicate: boolean }>('/api/agentes-training', {
      method: 'POST',
      body: { email: email.value, website: website.value },
    })

    signup.value = { email: email.value.trim().toLowerCase(), duplicate: result.duplicate }
    await navigateTo('/agentes/confirmacion')
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
    class="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-grok/10 sm:p-8 lg:sticky lg:top-24"
  >
    <div class="flex items-center justify-between gap-3">
      <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Inscripción</span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-grok/10 px-2.5 py-1 text-[11px] font-medium text-grok">
        <span class="h-1.5 w-1.5 rounded-full bg-grok" />
        Gratis
      </span>
    </div>
    <h2 id="signup-heading" class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
      Reserve su lugar.
    </h2>
    <p class="mt-3 text-sm leading-relaxed text-neutral-500">
      {{ agentesTraining.dateLabel }} · {{ agentesTraining.timeLabel }}
      ({{ agentesTraining.timeZoneLabel }}), por Google Meet. Deje su correo para
      reservar su lugar y recibir el enlace para agregarla a su calendario.
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
          class="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:border-grok focus:bg-white focus:outline-none focus:ring-2 focus:ring-grok/20"
        >
      </label>
      <label class="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        Sitio web
        <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off">
      </label>
      <button
        type="submit"
        :disabled="status === 'loading'"
        class="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-grok px-4 py-3 text-sm font-semibold text-white transition hover:bg-grok-dark disabled:cursor-wait disabled:opacity-60"
      >
        {{ status === 'loading' ? 'Inscribiendo…' : 'Inscribirme gratis' }}
        <svg v-if="status !== 'loading'" aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
    </form>

    <p v-if="status === 'error'" role="alert" class="mt-4 text-sm leading-relaxed text-red-600">
      {{ message }}
    </p>

    <p class="mt-5 text-xs leading-relaxed text-neutral-400">
      Solo usamos su correo para el registro de esta capacitación.
    </p>
  </aside>
</template>
