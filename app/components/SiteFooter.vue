<script setup lang="ts">
import { BRAND } from '#shared/utils/servicios'

defineProps<{ note?: string }>()
</script>

<template>
  <footer class="border-t border-neutral-200 bg-neutral-50">
    <div class="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-xs text-neutral-500 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <NuxtLink to="/" class="inline-flex items-center gap-2">
          <img src="/bcai-mark.svg" alt="" class="h-5 w-5" width="20" height="20">
          Business Context AI · {{ BRAND.site }}
        </NuxtLink>
        <nav class="flex flex-wrap gap-x-5 gap-y-2">
          <NuxtLink to="/#servicios" class="hover:text-neutral-900">Servicios</NuxtLink>
          <NuxtLink to="/cursos" class="hover:text-neutral-900">Cursos gratis</NuxtLink>
          <NuxtLink to="/taller" class="hover:text-neutral-900">Taller Ejecutivo</NuxtLink>
          <a :href="`mailto:${BRAND.email}`" class="hover:text-neutral-900">{{ BRAND.email }}</a>
        </nav>
      </div>
      <p v-if="note" class="text-neutral-400">{{ note }}</p>
    </div>
  </footer>
</template>
