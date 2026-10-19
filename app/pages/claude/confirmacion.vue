<script setup lang="ts">
useSeoMeta({
  title: 'Inscripción confirmada · Capacitación de Claude',
  robots: 'noindex',
  themeColor: '#d97757',
})

const signup = useState<{ email: string, duplicate: boolean } | null>('claude-signup', () => null)

const steps = [
  'Guardamos su correo en la lista de la capacitación.',
  'Le enviaremos por correo la fecha, la hora y los detalles para unirse.',
  'Si puede, cree antes una cuenta gratuita en claude.ai para seguir la demostración.',
]
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
          <template v-if="signup?.email">
            Le escribiremos a <strong class="font-semibold text-neutral-900">{{ signup.email }}</strong>
            con los detalles de la capacitación gratuita de Claude.
          </template>
          <template v-else>
            Le escribiremos con los detalles de la capacitación gratuita de Claude.
          </template>
        </p>

        <ol v-reveal="280" class="mt-10 space-y-3 rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-xl shadow-claude/10">
          <li
            v-for="(step, i) in steps"
            :key="step"
            class="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 transition duration-500 unrevealed:translate-y-1.5 unrevealed:opacity-0"
            :style="{ transitionDelay: `${400 + i * 110}ms` }"
          >
            <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-claude/10 text-[11px] font-semibold tabular-nums text-claude-dark">
              {{ i + 1 }}
            </span>
            {{ step }}
          </li>
        </ol>

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
