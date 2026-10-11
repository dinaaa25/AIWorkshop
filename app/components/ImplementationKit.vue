<script setup lang="ts">
type Mockup = 'checklist' | 'roi' | 'budget' | 'hiring' | 'policy' | 'dashboard' | 'roadmap' | 'map'

type Resource = {
  title: string
  format: string
  description: string
  mockup: Mockup
}

const featured: Resource[] = [
  {
    title: 'Checklist de oportunidades de automatización',
    format: 'PDF · Checklist',
    description: 'Revise cada área y marque las tareas repetitivas que la IA puede hacer primero.',
    mockup: 'checklist',
  },
  {
    title: 'Calculadora de ROI',
    format: 'Herramienta · Hoja de cálculo',
    description: 'Ponga sus horas, costos y volumen. Vea cuánto gana y en qué mes se paga el proyecto.',
    mockup: 'roi',
  },
  {
    title: 'Planificador de presupuesto y costos de IA',
    format: 'Plantilla · Hoja de cálculo',
    description: 'Licencias, costo de uso, integración y capacitación en un solo presupuesto anual.',
    mockup: 'budget',
  },
  {
    title: 'Guía de contratación y selección de socios',
    format: 'PDF · Guía',
    description: 'Qué preguntar, cómo comparar y qué señales de alerta revisar antes de contratar a una persona o un proveedor.',
    mockup: 'hiring',
  },
  {
    title: 'Kit inicial de política de IA',
    format: 'Kit · Plantillas editables',
    description: 'Reglas de uso, manejo de datos y aprobaciones. Listas para adaptar a su empresa.',
    mockup: 'policy',
  },
  {
    title: 'Tablero de IA del CEO',
    format: 'Herramienta · Tablero',
    description: 'Los números que importan en una sola pantalla: uso, ahorro, costo y riesgo.',
    mockup: 'dashboard',
  },
  {
    title: 'Hoja de ruta de 90 días',
    format: 'PDF · Plantilla',
    description: 'De la primera prueba a su primer proyecto en marcha, semana por semana, con responsables y metas.',
    mockup: 'roadmap',
  },
  {
    title: 'Mapa de oportunidades por departamento',
    format: 'PDF · Mapa',
    description: 'Las mejores ideas de IA para cada área, ordenadas por impacto y esfuerzo.',
    mockup: 'map',
  },
]

const additional = [
  'Prompts listos para ejecutivos',
  'Revisión de riesgos y seguridad de datos',
  'Plantilla para presentar el proyecto a la junta directiva',
  'Comparación de modelos y proveedores',
  'Guía para comunicar el cambio a su equipo',
]

const checklistRows = [
  { width: 82, checked: true },
  { width: 64, checked: true },
  { width: 74, checked: false },
  { width: 58, checked: true },
  { width: 70, checked: true },
  { width: 48, checked: false },
]

const roiFields = [
  { label: 'Horas ahorradas / mes', value: '120 h' },
  { label: 'Costo por hora', value: 'Q 150' },
  { label: 'Inversión inicial', value: 'Q 52,400' },
]

const roiBars = [28, 40, 36, 54, 68, 88]

const budgetRows = [
  { label: 'Integración', amount: 'Q 22,000', share: 39, color: '#171717' },
  { label: 'Licencias', amount: 'Q 18,400', share: 33, color: '#6366f1' },
  { label: 'Uso de API', amount: 'Q 9,600', share: 17, color: '#10b981' },
  { label: 'Capacitación', amount: 'Q 6,000', share: 11, color: '#d4d4d4' },
]

const budgetSegments = budgetRows.map((row, index) => {
  const before = budgetRows.slice(0, index).reduce((sum, r) => sum + r.share, 0)
  return { ...row, dasharray: `${row.share} ${100 - row.share}`, dashoffset: 25 - before }
})

const hiringRows = [
  { score: 92, best: true },
  { score: 71, best: false },
  { score: 54, best: false },
]

const policyDocs = [
  { label: 'Uso aceptable', accent: 'bg-indigo-500' },
  { label: 'Datos y privacidad', accent: 'bg-emerald-500' },
  { label: 'Aprobaciones', accent: 'bg-neutral-800' },
]

const dashboardKpis = [
  { label: 'Adopción', value: '68%' },
  { label: 'Ahorro', value: 'Q 214k' },
  { label: 'Riesgo', value: 'Bajo' },
]

const roadmapTasks = [
  { start: 0, width: 34 },
  { start: 12, width: 40 },
  { start: 30, width: 36 },
  { start: 52, width: 30 },
  { start: 70, width: 30 },
]

const mapDepartments = ['Finanzas', 'Ventas', 'Operaciones', 'RR. HH.', 'Servicio']
const mapValues = [
  [0.9, 0.5, 0.25, 0.15],
  [0.6, 0.85, 0.4, 0.2],
  [1, 0.7, 0.55, 0.3],
  [0.3, 0.45, 0.2, 0.1],
  [0.8, 0.95, 0.5, 0.25],
]

const delay = (index: number, step = 80) => ({ transitionDelay: `${index * step}ms` })
</script>

<template>
  <section aria-labelledby="kit-heading" class="border-t border-neutral-200">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div v-reveal class="grid gap-4 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">Incluido en el precio</span>
          <h2 id="kit-heading" class="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Kit de implementación del CEO.
          </h2>
        </div>
        <p class="text-sm leading-relaxed text-neutral-600 sm:text-base lg:pt-2">
          Todo lo que necesita para empezar sin partir de cero. Plantillas, guías y
          herramientas que se lleva el día del taller y puede usar desde el lunes.
        </p>
      </div>

      <ul class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(item, index) in featured" :key="item.title" v-reveal="(index % 3) * 90" class="flex">
          <div class="kit-card group flex flex-1 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5">
            <div
              aria-hidden="true"
              class="relative h-56 overflow-hidden border-b border-neutral-100 bg-neutral-100/70 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:14px_14px]"
            >
              <!-- Checklist -->
              <div v-if="item.mockup === 'checklist'" class="absolute inset-x-0 top-8 flex justify-center">
                <div class="relative h-60 w-44">
                  <div class="absolute inset-0 rounded-md bg-white shadow ring-1 ring-neutral-900/5 transition duration-500 group-hover:translate-x-5 group-hover:rotate-6" />
                  <div class="absolute inset-0 rounded-md bg-white p-4 shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-3">
                    <div class="flex items-center justify-between">
                      <span class="text-[7px] font-semibold uppercase tracking-[0.18em] text-emerald-600">Checklist</span>
                      <span class="text-[7px] tabular-nums text-neutral-300">01 / 06</span>
                    </div>
                    <div class="mt-2 h-2 w-28 rounded-sm bg-neutral-800" />
                    <div class="mt-1 h-2 w-16 rounded-sm bg-neutral-800" />
                    <ul class="mt-4 space-y-2.5">
                      <li v-for="(row, i) in checklistRows" :key="i" class="flex items-center gap-2">
                        <span
                          class="grid h-3 w-3 shrink-0 place-items-center rounded-[3px] border border-neutral-300 transition-colors duration-300"
                          :class="row.checked && 'group-hover:border-emerald-500 group-hover:bg-emerald-500'"
                          :style="delay(i)"
                        >
                          <svg
                            v-if="row.checked"
                            class="h-2 w-2 scale-0 text-white transition duration-300 group-hover:scale-100"
                            :style="delay(i)"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                          </svg>
                        </span>
                        <span class="h-1.5 rounded-full bg-neutral-200" :style="{ width: `${row.width}%` }" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- ROI calculator -->
              <template v-else-if="item.mockup === 'roi'">
                <div class="absolute inset-x-6 top-7 rounded-lg bg-white shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
                  <div class="flex items-center gap-1 border-b border-neutral-100 px-3 py-2">
                    <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                    <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                    <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                    <span class="ml-2 text-[8px] font-medium text-neutral-400">calculadora-roi.xlsx</span>
                  </div>
                  <div class="grid grid-cols-[1fr_1.1fr] gap-3 p-3">
                    <div class="space-y-2">
                      <div v-for="field in roiFields" :key="field.label">
                        <p class="text-[7px] uppercase tracking-wide text-neutral-400">{{ field.label }}</p>
                        <p class="mt-0.5 rounded border border-neutral-200 px-1.5 py-1 text-[9px] font-medium tabular-nums text-neutral-800">
                          {{ field.value }}
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col rounded-md bg-neutral-50 p-2">
                      <p class="text-[7px] uppercase tracking-wide text-neutral-400">ROI anual</p>
                      <p class="text-lg font-semibold leading-tight tabular-nums text-neutral-900">312%</p>
                      <div class="mt-auto flex h-12 items-end gap-1">
                        <span
                          v-for="(height, i) in roiBars"
                          :key="i"
                          class="flex-1 origin-bottom scale-y-[0.4] rounded-sm bg-neutral-300 transition duration-500 group-hover:scale-y-100 group-hover:bg-emerald-500"
                          :style="{ height: `${height}%`, ...delay(i, 60) }"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span class="absolute bottom-4 right-5 translate-y-3 rounded-full bg-neutral-900 px-2.5 py-1 text-[9px] font-medium text-white opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" style="transition-delay: 250ms">
                  Se paga en el mes 3
                </span>
              </template>

              <!-- Budget planner -->
              <div v-else-if="item.mockup === 'budget'" class="absolute inset-x-6 top-7 rounded-lg bg-white shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
                <div class="flex items-center gap-1 border-b border-neutral-100 px-3 py-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="ml-2 text-[8px] font-medium text-neutral-400">presupuesto-ia-2027.xlsx</span>
                </div>
                <div class="flex items-center gap-3 p-3">
                  <div class="relative h-20 w-20 shrink-0">
                    <svg viewBox="0 0 36 36" class="h-full w-full transition duration-700 group-hover:rotate-90 group-hover:scale-105">
                      <circle
                        v-for="segment in budgetSegments"
                        :key="segment.label"
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        stroke-width="5"
                        :stroke="segment.color"
                        :stroke-dasharray="segment.dasharray"
                        :stroke-dashoffset="segment.dashoffset"
                      />
                    </svg>
                    <div class="absolute inset-0 grid place-items-center text-center">
                      <div>
                        <p class="text-[6px] uppercase tracking-wide text-neutral-400">Total</p>
                        <p class="text-[9px] font-semibold tabular-nums text-neutral-900">Q 56k</p>
                      </div>
                    </div>
                  </div>
                  <ul class="min-w-0 flex-1 divide-y divide-neutral-100">
                    <li
                      v-for="(row, i) in budgetRows"
                      :key="row.label"
                      class="flex items-center gap-1.5 py-1 transition duration-300 group-hover:translate-x-0.5"
                      :style="delay(i, 60)"
                    >
                      <span class="h-1.5 w-1.5 shrink-0 rounded-full" :style="{ backgroundColor: row.color }" />
                      <span class="truncate text-[8px] text-neutral-600">{{ row.label }}</span>
                      <span class="ml-auto text-[8px] font-medium tabular-nums text-neutral-900">{{ row.amount }}</span>
                    </li>
                  </ul>
                </div>
                <div class="mx-3 mb-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div class="h-full w-full origin-left scale-x-[0.45] rounded-full bg-indigo-500 transition duration-700 group-hover:scale-x-[0.78]" />
                </div>
              </div>

              <!-- Hiring & partner guide -->
              <div v-else-if="item.mockup === 'hiring'" class="absolute inset-x-0 top-8 flex justify-center">
                <div class="relative h-60 w-44">
                  <div class="absolute inset-0 rounded-md bg-white shadow ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-x-5 group-hover:-rotate-6" />
                  <div class="absolute inset-0 rounded-md bg-white p-4 shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-2">
                    <span class="text-[7px] font-semibold uppercase tracking-[0.18em] text-indigo-500">Guía</span>
                    <div class="mt-2 h-2 w-24 rounded-sm bg-neutral-800" />
                    <div class="mt-1 h-2 w-28 rounded-sm bg-neutral-800" />
                    <p class="mt-4 text-[7px] uppercase tracking-wide text-neutral-400">Evaluación de candidatos</p>
                    <ul class="mt-2 space-y-2.5">
                      <li v-for="(row, i) in hiringRows" :key="i" class="flex items-center gap-2">
                        <span class="h-5 w-5 shrink-0 rounded-full bg-neutral-200" :class="row.best && 'group-hover:bg-emerald-100'" />
                        <div class="min-w-0 flex-1">
                          <div class="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                          <div class="mt-1 h-1 overflow-hidden rounded-full bg-neutral-100">
                            <div
                              class="h-full origin-left scale-x-[0.25] rounded-full transition duration-700 group-hover:scale-x-100"
                              :class="row.best ? 'bg-emerald-500' : 'bg-neutral-400'"
                              :style="{ width: `${row.score}%`, ...delay(i, 120) }"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <span class="absolute right-0 top-20 -rotate-12 scale-50 rounded border-2 border-emerald-500 bg-white/90 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-600 opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" style="transition-delay: 350ms">
                    Recomendado
                  </span>
                </div>
              </div>

              <!-- Policy starter kit -->
              <div v-else-if="item.mockup === 'policy'" class="absolute inset-x-0 top-9 flex justify-center">
                <div class="relative h-52 w-32">
                  <div
                    v-for="(doc, i) in policyDocs"
                    :key="doc.label"
                    class="absolute inset-0 rounded-md bg-white p-3 shadow-lg ring-1 ring-neutral-900/5 transition duration-500"
                    :class="[
                      i === 0 && '-translate-x-3 -rotate-6 group-hover:-translate-x-16 group-hover:-rotate-12',
                      i === 1 && 'z-10 group-hover:-translate-y-3',
                      i === 2 && 'translate-x-3 rotate-6 group-hover:translate-x-16 group-hover:rotate-12',
                    ]"
                  >
                    <span class="block h-1 w-8 rounded-full" :class="doc.accent" />
                    <p class="mt-2 text-[8px] font-semibold leading-tight text-neutral-900">{{ doc.label }}</p>
                    <div class="mt-3 space-y-1.5">
                      <div class="h-1 w-full rounded-full bg-neutral-200" />
                      <div class="h-1 w-5/6 rounded-full bg-neutral-200" />
                      <div class="h-1 w-full rounded-full bg-neutral-200" />
                      <div class="h-1 w-2/3 rounded-full bg-neutral-200" />
                    </div>
                    <div class="mt-3 space-y-1.5">
                      <div class="h-1 w-full rounded-full bg-neutral-100" />
                      <div class="h-1 w-4/5 rounded-full bg-neutral-100" />
                      <div class="h-1 w-11/12 rounded-full bg-neutral-100" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- CEO dashboard -->
              <div v-else-if="item.mockup === 'dashboard'" class="absolute inset-x-6 top-7 rounded-lg bg-white shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
                <div class="flex items-center gap-1 border-b border-neutral-100 px-3 py-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                  <span class="ml-2 text-[8px] font-medium text-neutral-400">Tablero de IA</span>
                  <span class="ml-auto flex items-center gap-1 text-[7px] font-medium text-emerald-600">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-pulse" />
                    En vivo
                  </span>
                </div>
                <div class="p-3">
                  <div class="grid grid-cols-3 gap-1.5">
                    <div
                      v-for="(kpi, i) in dashboardKpis"
                      :key="kpi.label"
                      class="rounded-md border border-neutral-100 bg-neutral-50 px-1.5 py-1 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-neutral-200 group-hover:bg-white"
                      :style="delay(i, 70)"
                    >
                      <p class="text-[6px] uppercase tracking-wide text-neutral-400">{{ kpi.label }}</p>
                      <p class="text-[10px] font-semibold tabular-nums text-neutral-900">{{ kpi.value }}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 120 44" class="mt-2 h-16 w-full" preserveAspectRatio="none">
                    <path d="M0 40 L20 34 L40 36 L60 24 L80 26 L100 14 L120 8 L120 44 L0 44 Z" class="fill-indigo-500/10" />
                    <path
                      d="M0 40 L20 34 L40 36 L60 24 L80 26 L100 14 L120 8"
                      pathLength="100"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-indigo-500 [stroke-dasharray:100] [stroke-dashoffset:45] transition-[stroke-dashoffset] duration-1000 ease-out group-hover:[stroke-dashoffset:0]"
                    />
                  </svg>
                </div>
              </div>

              <!-- 90-day roadmap -->
              <div v-else-if="item.mockup === 'roadmap'" class="absolute inset-x-0 top-8 flex justify-center">
                <div class="relative h-60 w-52 rounded-md bg-white p-4 shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-y-2 group-hover:-rotate-1">
                  <div class="flex items-center justify-between">
                    <span class="text-[7px] font-semibold uppercase tracking-[0.18em] text-indigo-500">Hoja de ruta</span>
                    <span class="text-[7px] font-semibold tabular-nums text-neutral-900">90 días</span>
                  </div>
                  <div class="mt-2 h-2 w-28 rounded-sm bg-neutral-800" />
                  <div class="mt-4 grid grid-cols-3 border-b border-neutral-100 pb-1 text-[6px] uppercase tracking-wide text-neutral-400">
                    <span>Mes 1</span>
                    <span>Mes 2</span>
                    <span>Mes 3</span>
                  </div>
                  <div class="relative mt-2 space-y-2">
                    <div aria-hidden="true" class="pointer-events-none absolute inset-0 grid grid-cols-3">
                      <span class="border-r border-dashed border-neutral-100" />
                      <span class="border-r border-dashed border-neutral-100" />
                      <span />
                    </div>
                    <div v-for="(task, i) in roadmapTasks" :key="i" class="relative h-2.5">
                      <div
                        class="absolute inset-y-0 origin-left scale-x-[0.2] rounded-full transition duration-700 group-hover:scale-x-100"
                        :class="i === roadmapTasks.length - 1 ? 'bg-emerald-500' : 'bg-neutral-800'"
                        :style="{ left: `${task.start}%`, width: `${task.width}%`, ...delay(i, 110) }"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Department map -->
              <div v-else-if="item.mockup === 'map'" class="absolute inset-x-0 top-8 flex justify-center">
                <div class="relative h-60 w-48 rounded-md bg-white p-4 shadow-lg ring-1 ring-neutral-900/5 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                  <span class="text-[7px] font-semibold uppercase tracking-[0.18em] text-emerald-600">Mapa</span>
                  <div class="mt-2 h-2 w-32 rounded-sm bg-neutral-800" />
                  <div class="mt-4 space-y-1.5">
                    <div v-for="(dept, row) in mapDepartments" :key="dept" class="grid grid-cols-[3.25rem_repeat(4,1fr)] items-center gap-1">
                      <span class="truncate text-[7px] text-neutral-500">{{ dept }}</span>
                      <span
                        v-for="(value, col) in mapValues[row]"
                        :key="col"
                        class="relative h-4 overflow-hidden rounded-[3px] bg-neutral-100"
                      >
                        <span
                          class="absolute inset-0 scale-0 rounded-[3px] transition duration-500 group-hover:scale-100"
                          :style="{ backgroundColor: `rgba(16, 185, 129, ${value})`, ...delay(row + col, 50) }"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="mt-2 grid grid-cols-[3.25rem_1fr] gap-1 text-[6px] uppercase tracking-wide text-neutral-400">
                    <span />
                    <span class="flex justify-between"><span>Alto impacto</span><span>Bajo</span></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">{{ item.format }}</span>
              <h3 class="mt-1.5 text-base font-semibold leading-snug text-neutral-900">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-neutral-500">{{ item.description }}</p>
            </div>
          </div>
        </li>

        <li v-reveal="(featured.length % 3) * 90" class="flex">
          <div class="kit-card group flex flex-1 flex-col overflow-hidden rounded-2xl bg-neutral-900 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/20">
            <div aria-hidden="true" class="relative h-56 overflow-hidden border-b border-white/10">
              <div class="absolute inset-x-0 top-10 flex justify-center">
                <div class="relative h-44 w-32">
                  <div class="absolute inset-0 -translate-x-4 -rotate-6 rounded-md bg-white/5 ring-1 ring-white/10 transition duration-500 group-hover:-translate-x-14 group-hover:-rotate-12" />
                  <div class="absolute inset-0 translate-x-4 rotate-6 rounded-md bg-white/5 ring-1 ring-white/10 transition duration-500 group-hover:translate-x-14 group-hover:rotate-12" />
                  <div class="absolute inset-0 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur-sm transition duration-500 group-hover:-translate-y-2">
                    <span class="text-4xl font-semibold tracking-tight">+{{ additional.length }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <span class="text-[11px] font-medium uppercase tracking-wide text-neutral-400">Y más</span>
              <h3 class="mt-1.5 text-base font-semibold leading-snug">+{{ additional.length }} recursos más</h3>
              <p class="mt-2 text-sm leading-relaxed text-neutral-400">
                Más plantillas y guías que recibe el día del taller.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .kit-card,
  .kit-card * {
    transition-duration: 0s !important;
    animation: none !important;
  }
}
</style>
