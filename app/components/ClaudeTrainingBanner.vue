<template>
  <section aria-label="Capacitación gratuita de Claude, ya realizada" class="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
    <NuxtLink
      v-reveal
      to="/claude"
      class="group relative flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-neutral-100 p-5 transition hover:bg-neutral-200/60 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div class="relative flex min-w-0 items-center gap-5">
        <span class="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-neutral-300 text-white sm:h-14 sm:w-14">
          <ClaudeMark class="h-6 w-6 opacity-40 grayscale sm:h-7 sm:w-7" />
          <span class="absolute -left-2.5 -top-2.5 grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/40 ring-4 ring-neutral-100">
            <svg aria-hidden="true" viewBox="0 0 12 12" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.2 6.3l2.6 2.6 5-5.2" />
            </svg>
          </span>
        </span>
        <div class="min-w-0">
          <p class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
            <svg aria-hidden="true" viewBox="0 0 12 12" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.2 6.3l2.6 2.6 5-5.2" />
            </svg>
            Realizada
          </p>
          <p class="mt-1 text-lg font-semibold tracking-tight text-neutral-400 line-through decoration-neutral-500 decoration-2 sm:text-xl">
            Capacitación gratuita de Claude
          </p>
          <p class="mt-0.5 text-sm leading-relaxed text-neutral-400 line-through decoration-neutral-400">
            {{ claudeTraining.dateLabel }} · {{ claudeTraining.timeLabel }} ({{ claudeTraining.timeZoneLabel }}), por Google Meet.
          </p>
        </div>
      </div>

      <span class="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/30">
        <svg aria-hidden="true" viewBox="0 0 12 12" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2.2 6.3l2.6 2.6 5-5.2" />
        </svg>
        Realizada
      </span>
    </NuxtLink>
  </section>
</template>
