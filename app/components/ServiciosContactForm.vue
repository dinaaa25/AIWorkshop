<script setup lang="ts">
import { BRAND } from '#shared/utils/servicios'

const name = ref('')
const email = ref('')
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
        website: website.value,
      },
    })

    status.value = 'success'
    name.value = ''
    email.value = ''
    organization.value = ''
    proceso.value = ''
  }
  catch (error: unknown) {
    status.value = 'error'
    const fetchError = error as { data?: { statusMessage?: string, message?: string }, statusMessage?: string }
    message.value
      = fetchError.data?.statusMessage
        || fetchError.data?.message
        || fetchError.statusMessage
        || 'No pudimos enviar su solicitud. Inténtelo de nuevo.'
  }
}
</script>

<template>
  <div class="rounded-3xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-xl shadow-neutral-900/5 sm:p-8">
    <form v-if="status !== 'success'" class="grid gap-4" @submit.prevent="submit">
      <div class="grid gap-4 sm:grid-cols-2">
        <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
          Nombre
          <input v-model="name" type="text" name="name" autocomplete="name" maxlength="120" required :class="inputClass">
        </label>
        <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
          Empresa
          <input v-model="organization" type="text" name="organization" autocomplete="organization" maxlength="160" :class="inputClass">
        </label>
      </div>
      <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
        Correo profesional
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          required
          maxlength="160"
          placeholder="usted@empresa.com"
          :class="inputClass"
        >
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
        class="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-wait disabled:opacity-60"
      >
        {{ status === 'loading' ? 'Enviando…' : 'Solicitar mi diagnóstico' }}
      </button>
    </form>

    <p v-if="status === 'error'" role="alert" class="mt-4 text-sm leading-relaxed text-red-600">
      {{ message }}
      <a :href="`mailto:${BRAND.email}`" class="font-medium underline underline-offset-4">{{ BRAND.email }}</a>
    </p>

    <div v-if="status === 'success'" class="rounded-2xl bg-emerald-50 p-4">
      <h3 class="text-base font-semibold text-emerald-900">Recibimos su solicitud.</h3>
      <p class="mt-1 text-sm leading-relaxed text-emerald-700">
        Le escribimos en un día hábil para agendar la primera conversación.
      </p>
    </div>

    <p class="mt-5 text-xs leading-relaxed text-neutral-400">
      Solo usamos sus datos para responder a esta solicitud.
    </p>
  </div>
</template>
