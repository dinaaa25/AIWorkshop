<script setup lang="ts">
type Achievement = {
  label: string
  stat: string
  statNote: string
  description: string
  tags?: string[]
}

const instructors = [
  { name: 'Mark', photo: '/marklinkedinphoto.png' },
  { name: 'Dina', photo: '/dinalinkedinphoto.png' },
]

const achievements: Achievement[] = [
  {
    label: 'Experiencia internacional',
    stat: '3',
    statNote: 'países',
    description: 'Han trabajado en empresas de Países Bajos, Suiza y Alemania.',
    tags: ['Países Bajos', 'Suiza', 'Alemania'],
  },
  {
    label: 'Investigación',
    stat: 'Papers',
    statNote: 'publicados',
    description: 'Han publicado artículos de investigación sobre modelos de IA para predecir el clima.',
  },
  {
    label: 'Implementación',
    stat: '5,000',
    statNote: 'empleados',
    description: 'Crearon el programa de implementación y capacitación en IA de una empresa de 5,000 empleados.',
  },
  {
    label: 'Alta dirección',
    stat: 'Claude',
    statNote: 'para el C-suite',
    description: 'Enseñan a directores generales y equipos de alta dirección a usar Claude en su trabajo diario.',
  },
]
</script>

<template>
  <section id="instructores" aria-labelledby="instructors-heading" class="border-t border-neutral-200 bg-white">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div class="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div v-reveal class="lg:sticky lg:top-28 lg:self-start">
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Quiénes enseñan</span>
          <h2 id="instructors-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Dos instructores con experiencia real en IA.
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Hemos creado productos de IA, publicado investigación y capacitado a
            directivos en Europa. En el taller le enseñamos lo que funciona en la
            práctica, con ejemplos de empresas reales.
          </p>

          <div class="mt-8 flex items-center gap-3">
            <div class="flex -space-x-3">
              <img
                v-for="(instructor, i) in instructors"
                :key="instructor.name"
                :src="instructor.photo"
                :alt="instructor.name"
                width="48"
                height="48"
                loading="lazy"
                class="h-12 w-12 rounded-full border-2 border-white bg-neutral-200 object-cover shadow-md transition duration-700 unrevealed:translate-x-3 unrevealed:opacity-0"
                :style="{ zIndex: instructors.length - i, transitionDelay: `${200 + (i + 1) * 120}ms` }"
              >
            </div>
            <span class="text-xs font-medium text-neutral-500">2 instructores - todo el día con el grupo</span>
          </div>
        </div>

        <ol class="divide-y divide-neutral-200 border-t border-neutral-200">
          <li
            v-for="(item, i) in achievements"
            :key="item.label"
            v-reveal="i * 60"
            class="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[9rem_1fr] sm:gap-x-6 sm:py-7"
          >
            <div>
              <p class="text-2xl font-semibold tracking-tight tabular-nums text-neutral-900">{{ item.stat }}</p>
              <p class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">{{ item.statNote }}</p>
              <span
                aria-hidden="true"
                class="mt-3 block h-0.5 w-10 origin-left rounded-full bg-emerald-500 transition duration-700 unrevealed:scale-x-0"
                style="transition-delay: 250ms"
              />
            </div>
            <div>
              <h3 class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">{{ item.label }}</h3>
              <p class="mt-1.5 max-w-xl text-base leading-relaxed text-neutral-800">{{ item.description }}</p>
              <ul v-if="item.tags" class="mt-3 flex flex-wrap gap-2">
                <li
                  v-for="(tag, t) in item.tags"
                  :key="tag"
                  class="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 transition duration-500 unrevealed:translate-y-1.5 unrevealed:opacity-0"
                  :style="{ transitionDelay: `${300 + t * 80}ms` }"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
