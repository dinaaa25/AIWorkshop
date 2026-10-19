<script setup lang="ts">
useSeoMeta({
  title: 'Inscripción confirmada · Capacitación de Claude',
  robots: 'noindex',
  themeColor: '#d97757',
})

const signup = useState<{ email: string, duplicate: boolean } | null>('claude-signup', () => null)

</script>

<template>
  <div class="flex min-h-screen flex-col bg-claude-ivory">
    <ClaudeHeader />

    <main class="relative flex-1 overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-gradient-to-br from-claude/25 via-claude/5 to-transparent opacity-70 blur-3xl" />
      </div>

      <div class="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <div v-reveal>
          <span class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-claude text-white shadow-lg shadow-claude/30 transition duration-700 unrevealed:scale-50">
            <svg
              aria-hidden="true"
              viewBox="0 0 12 12"
              class="h-7 w-7 transition duration-500 unrevealed:scale-0"
              style="transition-delay: 250ms"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2.5 6.5l2.5 2.5 4.5-5" />
            </svg>
          </span>
        </div>

        <h1 v-reveal="120" class="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {{ signup?.duplicate ? 'Ya estaba inscrito.' : '¡Listo, ya está inscrito!' }}
        </h1>
        <p v-reveal="200" class="mt-4 text-base leading-relaxed text-neutral-600">
          Guardamos su lugar<template v-if="signup?.email"> con el correo <strong class="font-semibold text-neutral-900">{{ signup.email }}</strong></template>.
          Agregue la capacitación a su calendario para no olvidarla.
        </p>

        <section v-reveal="280" aria-label="Detalles de la capacitación" class="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-xl shadow-claude/10 sm:p-7">
          <div class="flex items-start gap-4">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-claude text-white">
              <ClaudeMark class="h-5 w-5" />
            </span>
            <div>
              <h2 class="text-lg font-semibold tracking-tight text-neutral-900">{{ claudeTraining.title }}</h2>
              <p class="mt-1 text-sm text-neutral-600">
                {{ claudeTraining.dateLabel }} · {{ claudeTraining.timeLabel }}
                <span class="text-neutral-400">({{ claudeTraining.timeZoneLabel }})</span>
              </p>
              <p class="mt-0.5 text-sm text-neutral-600">En línea por Google Meet</p>
            </div>
          </div>

          <a
            :href="claudeTraining.meetUrl"
            target="_blank"
            rel="noopener"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-claude px-4 py-3 text-sm font-semibold text-white transition hover:bg-claude-dark"
          >
            Unirse por Google Meet
            <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <p class="mt-2 text-center text-xs text-neutral-400">{{ claudeTraining.meetUrl.replace('https://', '') }}</p>

          <ClaudeAddToCalendar class="mt-6 border-t border-neutral-100 pt-6" />

          <p class="mt-6 rounded-2xl bg-claude-ivory p-4 text-sm leading-relaxed text-neutral-600">
            Si puede, cree antes una cuenta gratuita en
            <a href="https://claude.ai" target="_blank" rel="noopener" class="font-medium text-claude-dark underline decoration-claude/40 underline-offset-4 hover:decoration-claude">claude.ai</a>
            para seguir la demostración.
          </p>
        </section>

        <div v-reveal="360" class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink to="/claude" class="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400">
            Volver a la capacitación
          </NuxtLink>
          <NuxtLink to="/" class="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700">
            Ver el Taller Ejecutivo de IA
          </NuxtLink>
        </div>
      </div>
    </main>

    <footer class="border-t border-neutral-200">
      <div class="mx-auto max-w-6xl px-4 py-8 text-xs text-neutral-500 sm:px-6 lg:px-8">
        Claude es una marca de Anthropic. Esta capacitación es independiente de Anthropic.
      </div>
    </footer>
  </div>
</template>
