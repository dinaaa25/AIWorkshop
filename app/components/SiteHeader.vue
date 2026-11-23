<script setup lang="ts">
/** Business Context AI header. The default slot replaces the main call to action. */
const links = [
  { label: 'Servicios', to: '/#servicios', className: 'hidden sm:inline' },
  { label: 'Cursos gratis', to: '/cursos', className: 'inline' },
  { label: 'Ejemplos', to: '/#ejemplos', className: 'hidden md:inline' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-2.5">
        <img src="/bcai-mark.svg" alt="" class="h-9 w-9 shrink-0" width="36" height="36">
        <span class="flex min-w-0 flex-col leading-tight">
          <strong class="truncate text-base font-semibold tracking-tight text-neutral-900">Business Context AI</strong>
          <span class="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:block">IA aplicada a su empresa</span>
        </span>
      </NuxtLink>
      <nav class="flex shrink-0 items-center gap-3 sm:gap-5">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="link.className"
          class="text-xs font-medium uppercase tracking-wide text-neutral-500 transition hover:text-neutral-900"
        >
          {{ link.label }}
        </NuxtLink>
        <slot>
          <NuxtLink to="/#contacto" class="rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark">
            <span class="sm:hidden">Diagnóstico</span>
            <span class="hidden sm:inline">Solicitar diagnóstico</span>
          </NuxtLink>
        </slot>
      </nav>
    </div>
  </header>
</template>
