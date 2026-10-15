<script setup lang="ts">
const highlights = [
  'Un día completo de taller presencial',
  'Kit de implementación con 13 herramientas',
  'Una hora para revisar su caso',
  'Café y almuerzo incluidos',
]
</script>

<template>
  <aside
    id="comprar"
    aria-labelledby="purchase-heading"
    class="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-8 lg:sticky lg:top-24"
  >
    <div class="flex items-center justify-between gap-3">
      <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Entrada</span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Cupos limitados
      </span>
    </div>
    <h2 id="purchase-heading" class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
      Asegure su lugar.
    </h2>
    <p class="mt-4 flex items-baseline gap-2">
      <span class="text-5xl font-semibold tracking-tight tabular-nums text-neutral-900">$799</span>
      <span class="text-sm text-neutral-500">USD por persona</span>
    </p>

    <ul class="mt-6 space-y-3 border-t border-neutral-100 pt-6">
      <li v-for="(item, i) in highlights" :key="item" class="flex items-center gap-3 text-sm text-neutral-700">
        <span
          aria-hidden="true"
          class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 transition duration-500 unrevealed:scale-50 unrevealed:bg-neutral-200"
          :style="{ transitionDelay: `${400 + i * 110}ms` }"
        >
          <svg
            viewBox="0 0 12 12"
            class="h-2.5 w-2.5 text-white transition duration-500 unrevealed:scale-0"
            :style="{ transitionDelay: `${450 + i * 110}ms` }"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M2.5 6.5l2.5 2.5 4.5-5" />
          </svg>
        </span>
        {{ item }}
      </li>
    </ul>

    <a
      :href="checkoutUrl"
      class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
    >
      Comprar mi entrada
      <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </a>

    <div class="mt-5 rounded-2xl bg-neutral-50 p-4">
      <p class="text-sm font-medium text-neutral-900">¿Cuándo y dónde?</p>
      <p class="mt-1 text-sm leading-relaxed text-neutral-500">
        Después de pagar, le enviamos por correo la hora y el lugar exacto del taller (5 de diciembre, Ciudad de Guatemala).
      </p>
    </div>

    <p class="mt-4 flex items-center gap-1.5 text-xs text-neutral-400">
      <svg aria-hidden="true" viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="7" width="10" height="7" rx="1.5" />
        <path d="M5.5 7V5a2.5 2.5 0 015 0v2" />
      </svg>
      Pago seguro con Stripe.
    </p>
  </aside>
</template>
