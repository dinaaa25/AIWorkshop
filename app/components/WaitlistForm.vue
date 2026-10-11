<script setup lang="ts">
const name = ref('')
const email = ref('')
const organization = ref('')
const website = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const message = ref('')

async function submit() {
  if (status.value === 'loading') {
    return
  }

  status.value = 'loading'
  message.value = ''

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        organization: organization.value,
        website: website.value,
      },
    })

    status.value = 'success'
    name.value = ''
    email.value = ''
    organization.value = ''
  }
  catch (error: unknown) {
    status.value = 'error'
    const fetchError = error as { data?: { statusMessage?: string, message?: string }, statusMessage?: string }
    message.value
      = fetchError.data?.statusMessage
        || fetchError.data?.message
        || fetchError.statusMessage
        || 'No pudimos guardar sus datos. Inténtelo de nuevo.'
  }
}
</script>

<template>
  <aside
    id="reserve"
    aria-labelledby="reserve-heading"
    class="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-8 lg:sticky lg:top-24"
  >
    <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Lista de espera</span>
    <h2 id="reserve-heading" class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
      Reserve su lugar.
    </h2>
    <p class="mt-3 text-sm leading-relaxed text-neutral-500">
      Deje su correo y le avisamos primero cuando tengamos fecha, hora y lugar.
      Hay pocos cupos.
    </p>

    <form v-if="status !== 'success'" class="mt-6 grid gap-4" @submit.prevent="submit">
      <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
        Nombre completo
        <input
          v-model="name"
          type="text"
          name="name"
          autocomplete="name"
          maxlength="120"
          placeholder="Opcional"
          class="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        >
      </label>
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
          class="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        >
      </label>
      <label class="grid gap-1.5 text-xs font-medium uppercase tracking-wide text-neutral-500">
        Organización
        <input
          v-model="organization"
          type="text"
          name="organization"
          autocomplete="organization"
          maxlength="160"
          placeholder="Opcional"
          class="rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-base font-normal normal-case tracking-normal text-neutral-900 placeholder:text-neutral-400 transition focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        >
      </label>
      <label class="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        Sitio web
        <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off">
      </label>
      <button
        type="submit"
        :disabled="status === 'loading'"
        class="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:cursor-wait disabled:opacity-60"
      >
        {{ status === 'loading' ? 'Reservando…' : 'Unirme a la lista de espera' }}
      </button>
    </form>

    <p v-if="status === 'error'" role="alert" class="mt-4 text-sm leading-relaxed text-red-600">
      {{ message }}
    </p>

    <div v-if="status === 'success'" class="mt-6 rounded-2xl bg-emerald-50 p-4">
      <h3 class="text-base font-semibold text-emerald-900">Ya está en la lista.</h3>
      <p class="mt-1 text-sm leading-relaxed text-emerald-700">
        Gracias. Le escribiremos a ese correo cuando tengamos la fecha y la hora.
      </p>
    </div>

    <p class="mt-5 text-xs leading-relaxed text-neutral-400">
      Precio: $799 USD por persona. Unirse a la lista es gratis. Solo usamos su
      correo para avisarle sobre este taller.
    </p>
  </aside>
</template>
