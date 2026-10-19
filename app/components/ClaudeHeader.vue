<template>
  <header class="sticky top-0 z-50 border-b border-neutral-200/80 bg-claude-ivory/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/claude" class="flex items-center gap-3">
        <ClaudeMark class="h-6 w-6 text-claude" />
        <span class="flex flex-col leading-tight">
          <strong class="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">Capacitación de Claude</strong>
          <span class="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">Gratis · 45 minutos</span>
        </span>
      </NuxtLink>
      <nav class="flex items-center gap-3 sm:gap-5">
        <NuxtLink to="/" class="hidden text-xs font-medium uppercase tracking-wide text-neutral-500 transition hover:text-neutral-900 sm:inline">
          Taller Ejecutivo de IA
        </NuxtLink>
        <slot />
      </nav>
    </div>
  </header>
</template>
