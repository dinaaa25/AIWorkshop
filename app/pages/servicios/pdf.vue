<script setup lang="ts">
// Print-only one-pager. Export with: pnpm pdf:servicios (needs `pnpm dev` running).
import {
  BRAND,
  CTA,
  DATA_SECTION,
  EXAMPLES,
  GUARANTEE,
  HERO,
  OFFER,
  SERVICES,
  STEPS,
  TOOLS,
} from '#shared/utils/servicios'

useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/bcai-mark.svg', key: 'icon' }],
  title: 'Business Context AI · Servicios',
  meta: [{ name: 'robots', content: 'noindex' }],
  style: [{ innerHTML: '@page { size: A4; margin: 0 } html, body { background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact }' }],
})

const featured = SERVICES[0]!
const rest = SERVICES.slice(1)
</script>

<template>
  <div class="bg-neutral-200 print:bg-white">
    <!-- Page 1 -->
    <section class="sheet relative mx-auto flex flex-col overflow-hidden bg-white px-[16mm] py-[14mm] text-neutral-900">
      <header class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img src="/bcai-mark.svg" alt="" class="h-9 w-9" width="36" height="36">
          <strong class="text-[15px] font-semibold tracking-tight">Business Context AI</strong>
        </div>
        <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">{{ HERO.eyebrow }}</span>
      </header>

      <h1 class="mt-[7mm] text-[28px] font-semibold leading-[1.08] tracking-tight">{{ HERO.title }}</h1>
      <p class="mt-4 text-[12.5px] leading-relaxed text-neutral-600">{{ HERO.lead }}</p>

      <div class="mt-[6mm] grid grid-cols-3 gap-4">
        <div v-for="(step, i) in STEPS" :key="step.title" class="border-t-2 border-neutral-200 pt-3">
          <span class="text-[11px] font-semibold tabular-nums text-neutral-300">0{{ i + 1 }}</span>
          <h2 class="mt-1 text-[13px] font-semibold">{{ step.title }}</h2>
          <p class="mt-1 text-[10.5px] leading-snug text-neutral-600">{{ step.text }}</p>
        </div>
      </div>

      <h2 class="mt-[5mm] text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Servicios</h2>

      <article class="mt-3 rounded-2xl bg-neutral-900 p-5 text-white">
        <div class="flex items-start justify-between gap-6">
          <div>
            <span class="rounded-full bg-primary/25 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-soft">{{ featured.tag }}</span>
            <h3 class="mt-2 text-[18px] font-semibold">{{ featured.name }}</h3>
            <p class="mt-1 text-[11.5px] leading-snug text-neutral-300">{{ featured.promise }}</p>
          </div>
          <div class="shrink-0 text-right">
            <p class="text-[8.5px] font-medium uppercase tracking-[0.14em] text-neutral-400">Inversión</p>
            <p class="text-[24px] font-semibold leading-tight">{{ OFFER.precioDiagnostico }}</p>
            <p class="text-[9px] text-neutral-400">precio fijo</p>
          </div>
        </div>
        <ul class="mt-3 grid grid-cols-2 gap-x-5 gap-y-1">
          <li v-for="d in featured.deliverables" :key="d" class="flex gap-2 text-[10.5px] leading-snug text-neutral-300">
            <span class="text-primary">✓</span>{{ d }}
          </li>
        </ul>
        <p class="mt-3 border-t border-neutral-700 pt-2.5 text-[10px] text-neutral-400">
          Su tiempo: {{ OFFER.tiempoEquipo }} con su equipo y {{ OFFER.tiempoGerencia }} con la gerencia.
        </p>
      </article>

      <div class="mt-3 rounded-xl bg-primary-soft px-5 py-3.5">
        <h2 class="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-dark">{{ GUARANTEE.title }}</h2>
        <p class="mt-1 text-[11px] leading-snug text-primary-ink">{{ GUARANTEE.text }}</p>
      </div>

      <h2 class="mt-[4mm] text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Después del diagnóstico, según lo que necesite</h2>
      <ol class="mt-2 divide-y divide-neutral-200 border-y border-neutral-200">
        <li v-for="(svc, i) in rest" :key="svc.name" class="grid grid-cols-[8mm_62mm_1fr] items-baseline gap-x-4 py-2">
          <span class="text-[11px] font-semibold tabular-nums text-neutral-300">0{{ i + 1 }}</span>
          <div>
            <span class="text-[8.5px] font-semibold uppercase tracking-[0.14em] text-neutral-400">{{ svc.tag }}</span>
            <h3 class="text-[13px] font-semibold leading-tight">{{ svc.name }}</h3>
          </div>
          <p class="text-[10.5px] leading-snug text-neutral-600">{{ svc.promise }}</p>
        </li>
      </ol>

      <footer class="mt-auto flex items-center justify-between border-t border-neutral-200 pt-3 text-[9.5px] text-neutral-400">
        <span class="inline-flex items-center gap-1.5"><img src="/bcai-mark.svg" alt="" class="h-3.5 w-3.5" width="14" height="14">Business Context AI · {{ BRAND.site }}</span>
        <span>1 / 2</span>
      </footer>
    </section>

    <!-- Page 2 -->
    <section class="sheet relative mx-auto flex flex-col overflow-hidden bg-white px-[16mm] py-[14mm] text-neutral-900">
      <h2 class="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Procesos que ya automatizamos</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <article v-for="ex in EXAMPLES" :key="ex.title" class="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
          <span class="text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-400">{{ ex.subtitle }}</span>
          <h3 class="text-[13.5px] font-semibold">{{ ex.title }}</h3>
          <p class="mt-1.5 text-[10px] leading-snug text-neutral-500"><strong class="font-semibold text-neutral-700">Antes:</strong> {{ ex.before }}</p>
          <p class="mt-1 text-[10px] leading-snug text-neutral-800"><strong class="font-semibold text-primary-dark">Después:</strong> {{ ex.after }}</p>
        </article>
      </div>
      <p class="mt-2.5 text-[10px] text-neutral-500">
        Herramientas según su proceso: {{ TOOLS.map(t => t.name).join(' · ') }}.
      </p>

      <h2 class="mt-[4mm] text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">{{ DATA_SECTION.bridgeEyebrow }}</h2>
      <p class="mt-1 text-[12px] leading-snug text-neutral-600">{{ DATA_SECTION.bridgeTitle }}</p>
      <div class="mt-2.5 rounded-2xl border border-neutral-200 px-5 py-4">
        <span class="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-dark">{{ DATA_SECTION.name }}</span>
        <h3 class="mt-1 text-[15px] font-semibold leading-snug">{{ DATA_SECTION.title }}</h3>
        <p class="mt-2 text-[10.5px] leading-snug text-neutral-600">{{ DATA_SECTION.problem }}</p>
        <div class="mt-3 grid grid-cols-3 gap-4">
          <div v-for="(s, i) in DATA_SECTION.steps" :key="s.title">
            <span class="grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-semibold text-white">{{ i + 1 }}</span>
            <h3 class="mt-1.5 text-[11.5px] font-semibold">{{ s.title }}</h3>
            <p class="mt-0.5 text-[10px] leading-snug text-neutral-600">{{ s.text }}</p>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-3">
          <div>
            <h4 class="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Lo que obtiene</h4>
            <ul class="mt-1.5 grid gap-1">
              <li v-for="o in DATA_SECTION.outcomes" :key="o" class="flex gap-1.5 text-[10px] leading-snug text-neutral-700">
                <span class="text-primary">✓</span>{{ o }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Preguntas que su equipo podrá hacer</h4>
            <ul class="mt-1.5 grid gap-1.5">
              <li v-for="q in DATA_SECTION.questions" :key="q" class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-[10px] text-neutral-800">{{ q }}</li>
            </ul>
          </div>
        </div>
      </div>


      <div class="mt-[4mm] rounded-2xl bg-neutral-900 px-6 py-4 text-white">
        <div class="flex items-center gap-3">
          <img src="/bcai-mark-light.svg" alt="" class="h-7 w-7" width="28" height="28">
          <h2 class="text-[18px] font-semibold leading-tight">{{ CTA.title }}</h2>
        </div>
        <p class="mt-2 text-[11.5px] leading-relaxed text-neutral-300">
          {{ CTA.text }} El diagnóstico toma {{ OFFER.diagnosticoDias }} días hábiles y su equipo solo necesita {{ OFFER.tiempoEquipo }}, más {{ OFFER.tiempoGerencia }} con la gerencia.
        </p>
        <div class="mt-3 grid grid-cols-2 gap-4 border-t border-neutral-700 pt-3 text-[11.5px]">
          <div>
            <p class="text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-500">Correo</p>
            <p class="mt-0.5 font-medium">{{ BRAND.email }}</p>
          </div>
          <div>
            <p class="text-[9px] font-medium uppercase tracking-[0.14em] text-neutral-500">Web</p>
            <p class="mt-0.5 font-medium">{{ BRAND.pageUrl.replace('https://', '') }}</p>
          </div>
        </div>
      </div>

      <footer class="mt-auto flex items-center justify-between border-t border-neutral-200 pt-3 text-[9.5px] text-neutral-400">
        <span class="inline-flex items-center gap-1.5"><img src="/bcai-mark.svg" alt="" class="h-3.5 w-3.5" width="14" height="14">Business Context AI · {{ BRAND.site }}</span>
        <span>2 / 2</span>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.sheet {
  width: 210mm;
  height: 297mm;
  break-after: page;
}

.sheet:last-child {
  break-after: auto;
}

@media screen {
  .sheet {
    margin-block: 12mm;
    box-shadow: 0 10px 30px rgb(0 0 0 / 0.12);
  }
}
</style>
