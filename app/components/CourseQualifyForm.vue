<script setup lang="ts">
/** Optional follow-up after a course signup: turns an attendee into a qualified diagnostic lead. */
const props = defineProps<{ sessionId: string, email?: string }>()

const name = ref('')
const email = ref(props.email ?? '')
const organization = ref('')
const proceso = ref('')
const website = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const message = ref('')

const inputClass = 'rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20'

async function submit() {
  if (status.value === 'loading') {
    return
  }

  status.value = 'loading'
  message.value = ''

  try {
    await $fetch('/api/servicios', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        organization: organization.value,
        proceso: proceso.value,
        source: `curso:${props.sessionId}`,
        website: website.value,
      },
    })
    status.value = 'success'
    track('course_qualified', { session_id: props.sessionId, has_process: Boolean(proceso.value.trim()) })
  }
  catch (error: unknown) {
    status.value = 'error'
    const fetchError = error as { data?: { statusMessage?: string }, statusMessage?: string }
    message.value = fetchError.data?.statusMessage || fetchError.statusMessage || 'No pudimos enviar sus datos. Inténtelo de nuevo.'
  }
}
</script>

<template>
  <section aria-labelledby="qualify-heading" class="rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-xl shadow-neutral-900/5 sm:p-7">
    <template v-if="status !== 'success'">
      <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Opcional · 30 segundos</span>
      <h2 id="qualify-heading" class="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
        Ayúdenos a preparar ejemplos para su empresa.
      </h2>
      <p class="mt-2 text-sm leading-relaxed text-neutral-600">
        Si nos cuenta a qué se dedica y qué proceso le quita más horas, usamos casos parecidos al suyo en la demostración.
      </p>

      <form class="mt-5 grid gap-4" @submit.prevent="submit">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
            Nombre
            <input v-model="name" type="text" name="name" autocomplete="name" maxlength="120" :class="inputClass">
          </label>
          <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
            Empresa y cargo
            <input v-model="organization" type="text" name="organization" autocomplete="organization" maxlength="160" placeholder="Ej.: Exportadora XYZ, gerente de finanzas" :class="inputClass">
          </label>
        </div>
        <label v-if="!props.email" class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
          Correo electrónico
          <input v-model="email" type="email" name="email" autocomplete="email" required maxlength="160" placeholder="usted@empresa.com" :class="inputClass">
        </label>
        <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
          ¿Qué proceso le quita más horas a su equipo?
          <textarea
            v-model="proceso"
            name="proceso"
            rows="3"
            maxlength="1000"
            placeholder="Ej.: digitamos a mano las órdenes de compra que llegan por correo."
            :class="inputClass"
          />
        </label>
        <label class="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
          Sitio web
          <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off">
        </label>
        <button
          type="submit"
          :disabled="status === 'loading'"
          class="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:cursor-wait disabled:opacity-60"
        >
          {{ status === 'loading' ? 'Enviando…' : 'Enviar' }}
        </button>
      </form>

      <p v-if="status === 'error'" role="alert" class="mt-4 text-sm leading-relaxed text-red-600">{{ message }}</p>
    </template>

    <div v-else class="rounded-2xl bg-emerald-50 p-4">
      <h2 class="text-base font-semibold text-emerald-900">¡Gracias! Lo tendremos en cuenta.</h2>
      <p class="mt-1 text-sm leading-relaxed text-emerald-700">
        Si quiere ir más allá de la capacitación, podemos mapear ese proceso con usted y decirle cuántas horas puede recuperar.
      </p>
    </div>
  </section>
</template>
