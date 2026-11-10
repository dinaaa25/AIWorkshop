<template>
  <section aria-label="Capacitación gratuita de Agentes" class="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
    <NuxtLink
      v-reveal
      to="/agentes"
      class="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-grok/20 bg-grok-paper p-5 shadow-lg shadow-grok/10 transition hover:border-grok/40 hover:shadow-xl hover:shadow-grok/15 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-grok/10 blur-3xl" />

      <div class="relative flex items-center gap-4">
        <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-grok text-white shadow-md shadow-grok/30 sm:h-14 sm:w-14">
          <GrokMark class="h-6 w-6 transition duration-700 group-hover:scale-110 sm:h-7 sm:w-7" />
        </span>
        <div>
          <p class="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-grok">
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-grok opacity-60 motion-reduce:hidden" />
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-grok" />
            </span>
            Nuevo · Gratis · 45 minutos
          </p>
          <p class="mt-1 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
            Capacitación gratuita de Agentes
          </p>
          <p class="mt-0.5 text-sm leading-relaxed text-neutral-600">
            {{ agentesTraining.dateLabel }} · {{ agentesTraining.timeLabel }} ({{ agentesTraining.timeZoneLabel }}), por Google Meet.
          </p>
        </div>
      </div>

      <span class="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-grok px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-grok-dark">
        Inscribirme gratis
        <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </NuxtLink>
  </section>
</template>
