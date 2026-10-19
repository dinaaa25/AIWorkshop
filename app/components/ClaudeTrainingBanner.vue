<template>
  <section aria-label="Capacitación gratuita de Claude" class="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
    <NuxtLink
      v-reveal
      to="/claude"
      class="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-claude/30 bg-claude-ivory p-5 shadow-lg shadow-claude/10 transition hover:border-claude/60 hover:shadow-xl hover:shadow-claude/15 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-claude/15 blur-3xl" />

      <div class="relative flex items-center gap-4">
        <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-claude text-white shadow-md shadow-claude/30 sm:h-14 sm:w-14">
          <ClaudeMark class="h-6 w-6 transition duration-700 group-hover:rotate-90 sm:h-7 sm:w-7" />
        </span>
        <div>
          <p class="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-claude-dark">
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-claude opacity-60 motion-reduce:hidden" />
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-claude" />
            </span>
            Nuevo · Gratis · 45 minutos
          </p>
          <p class="mt-1 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
            Capacitación gratuita de Claude
          </p>
          <p class="mt-0.5 text-sm leading-relaxed text-neutral-600">
            Aprenda a usar las funciones clave de Claude en su trabajo diario.
          </p>
        </div>
      </div>

      <span class="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-claude px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-claude-dark">
        Inscribirme gratis
        <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </NuxtLink>
  </section>
</template>
