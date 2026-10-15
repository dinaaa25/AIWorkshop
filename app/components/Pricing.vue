<script setup lang="ts">
const included = [
  { title: 'Un día completo de taller', detail: 'Presencial, en Ciudad de Guatemala, con grupo pequeño.' },
  { title: 'El programa completo', detail: 'Casos reales, herramientas, números, seguridad y cómo armar su equipo.' },
  { title: 'Kit de implementación del CEO', detail: '13 plantillas, guías y herramientas para usar desde el lunes.' },
  { title: 'Una hora para su caso', detail: 'Traiga su situación y la revisamos con usted.' },
  { title: 'Café y almuerzo', detail: 'Incluidos durante el día.' },
]

const problems = [
  'Su equipo pierde horas cada semana en tareas que la IA ya puede hacer.',
  'Paga herramientas o proveedores sin saber si le conviene.',
  'Otras empresas ya trabajan más rápido y con menos costo.',
]

const exampleMath = [
  { label: 'Personas en su equipo', value: '5' },
  { label: 'Horas ahorradas por semana, cada una', value: '2 h' },
  { label: 'Costo por hora', value: '$20' },
]
</script>

<template>
  <section id="precio" aria-labelledby="pricing-heading" class="border-t border-neutral-200">
    <div class="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
      <div>
        <div v-reveal>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Precio</span>
          <h2 id="pricing-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Cada mes sin IA le cuesta horas y dinero.
          </h2>
          <p class="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            La mayoría de CEOs sabe que debería usar IA, pero no tiene tiempo para
            investigar qué sirve y qué no. Mientras tanto, el problema crece:
          </p>
        </div>

        <ul class="mt-6 space-y-3">
          <li
            v-for="(problem, i) in problems"
            :key="problem"
            v-reveal="i * 80"
            class="flex gap-3 rounded-xl border border-neutral-200 bg-white p-4"
          >
            <span aria-hidden="true" class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
              <svg viewBox="0 0 12 12" class="h-2.5 w-2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M3 3l6 6M9 3l-6 6" />
              </svg>
            </span>
            <span class="text-sm leading-relaxed text-neutral-700">{{ problem }}</span>
          </li>
        </ul>

        <p v-reveal class="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          En un día le damos lo que tomaría meses aprender por su cuenta: qué usar,
          cuánto cuesta y por dónde empezar.
        </p>

        <div v-reveal class="mt-8 rounded-2xl border border-neutral-200 bg-white p-5">
          <p class="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">Ejemplo sencillo</p>
          <dl class="mt-3 divide-y divide-neutral-100">
            <div
              v-for="(row, i) in exampleMath"
              :key="row.label"
              class="flex items-center justify-between py-2 transition duration-500 unrevealed:translate-x-2 unrevealed:opacity-0"
              :style="{ transitionDelay: `${150 + i * 90}ms` }"
            >
              <dt class="text-sm text-neutral-600">{{ row.label }}</dt>
              <dd class="text-sm font-semibold tabular-nums text-neutral-900">{{ row.value }}</dd>
            </div>
          </dl>
          <div class="mt-3 flex items-center justify-between rounded-xl bg-emerald-50 px-3.5 py-3">
            <span class="text-sm font-medium text-emerald-900">Ahorro al mes</span>
            <span
              class="text-lg font-semibold tabular-nums text-emerald-700 transition duration-500 unrevealed:scale-90 unrevealed:opacity-0"
              style="transition-delay: 500ms"
            >
              $800
            </span>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-neutral-500">
            Con estos números, el taller se paga en el primer mes. Usted hará el cálculo
            con sus propios datos en la calculadora del kit.
          </p>
        </div>
      </div>

      <div v-reveal="120" class="lg:sticky lg:top-24">
        <div class="relative overflow-hidden rounded-3xl bg-neutral-900 p-6 text-white shadow-2xl shadow-neutral-900/20 sm:p-8">
          <div aria-hidden="true" class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />

          <div class="relative">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-300">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Cupos limitados
            </span>
            <h3 class="mt-5 text-lg font-semibold">Taller Ejecutivo de IA</h3>
            <p class="mt-2 flex items-baseline gap-2">
              <span class="text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl">$799</span>
              <span class="text-sm text-neutral-400">USD por persona</span>
            </p>
            <p class="mt-3 text-sm leading-relaxed text-neutral-400">
              Un solo pago. Todo lo de abajo está incluido.
            </p>

            <ul class="mt-6 space-y-4 border-t border-white/10 pt-6">
              <li v-for="(item, i) in included" :key="item.title" class="flex gap-3">
                <span
                  aria-hidden="true"
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 transition duration-500 unrevealed:scale-50 unrevealed:bg-white/10"
                  :style="{ transitionDelay: `${250 + i * 110}ms` }"
                >
                  <svg
                    viewBox="0 0 12 12"
                    class="h-2.5 w-2.5 text-white transition duration-500 unrevealed:scale-0"
                    :style="{ transitionDelay: `${300 + i * 110}ms` }"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                  </svg>
                </span>
                <span>
                  <span class="block text-sm font-semibold text-white">{{ item.title }}</span>
                  <span class="block text-sm leading-relaxed text-neutral-400">{{ item.detail }}</span>
                </span>
              </li>
            </ul>

            <a
              :href="checkoutUrl"
              class="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
            >
              Comprar mi entrada
            </a>
            <p class="mt-3 text-center text-xs text-neutral-500">
              Pago seguro con Stripe. Taller el 5 de diciembre. Le enviamos la hora y el lugar exacto por correo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
