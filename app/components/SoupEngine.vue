<script setup lang="ts">
const {
  spoonCount,
  soupType,
  vibeCodingIntensity,
  isStirring,
  consoleLogs,
  flavourMetrics,
  soupStatus,
  triggerSpoonSync,
  soupOptions
} = useSoupEngine()

const selectedSoupLabel = computed(() => {
  const match = soupOptions.find(s => s.value === soupType.value)
  if (!match) return soupType.value
  return match.label.split('(')[0]?.trim() || match.label
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    <!-- Controls (Left 5 Cols) -->
    <div class="lg:col-span-5 space-y-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl transition-colors">
      <div>
        <label
          for="broth-select"
          class="block text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2"
        >Select Target Broth</label>
        <select
          id="broth-select"
          v-model="soupType"
          aria-label="Select Target Broth"
          class="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-lg p-2.5 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:border-amber-500"
        >
          <option
            v-for="s in soupOptions"
            :key="s.value"
            :value="s.value"
          >
            {{ s.label }}
          </option>
        </select>
      </div>

      <div>
        <div class="flex justify-between text-xs font-mono mb-2">
          <label
            for="spoon-count-slider"
            class="text-neutral-600 dark:text-neutral-400"
          >Concurrent Spoons in Pot</label>
          <span class="text-amber-600 dark:text-amber-400 font-bold">{{ spoonCount }} spoons</span>
        </div>
        <input
          id="spoon-count-slider"
          v-model.number="spoonCount"
          aria-label="Concurrent Spoons in Pot"
          type="range"
          min="1"
          max="10"
          step="1"
          class="w-full accent-amber-500 bg-neutral-200 dark:bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
        >
        <div class="flex justify-between text-xs text-neutral-500 dark:text-neutral-500 mt-1 font-mono">
          <span>1 (Low Concurrency)</span>
          <span>5 (Optimal)</span>
          <span>10 (Total Chaos)</span>
        </div>
      </div>

      <div>
        <div class="flex justify-between text-xs font-mono mb-2">
          <label
            for="vibe-intensity-slider"
            class="text-neutral-600 dark:text-neutral-400"
          >Vibe Coding Intensity</label>
          <span class="text-orange-600 dark:text-orange-400 font-bold">{{ vibeCodingIntensity }}% blind trust</span>
        </div>
        <input
          id="vibe-intensity-slider"
          v-model.number="vibeCodingIntensity"
          aria-label="Vibe Coding Intensity"
          type="range"
          min="0"
          max="100"
          step="5"
          class="w-full accent-orange-500 bg-neutral-200 dark:bg-neutral-800 h-2.5 rounded-lg cursor-pointer"
        >
      </div>

      <UButton
        block
        size="lg"
        color="warning"
        :loading="isStirring"
        label="Stir Soup & Emit WebSocket Flavour Event"
        icon="i-lucide-refresh-cw"
        class="font-bold text-neutral-950"
        @click="triggerSpoonSync"
      />

      <!-- Console Logs -->
      <div class="bg-neutral-900 dark:bg-neutral-950 p-3.5 rounded-lg border border-neutral-800 font-mono text-xs space-y-1.5 shadow-inner">
        <div class="text-neutral-500 border-b border-neutral-800 pb-1 flex justify-between">
          <span>stdout: spoon-orchestrator.log</span>
          <span class="text-emerald-400">● LIVE</span>
        </div>
        <div
          v-for="(log, idx) in consoleLogs"
          :key="idx"
          class="text-neutral-300 truncate text-[11px] leading-relaxed"
        >
          {{ log }}
        </div>
      </div>
    </div>

    <!-- Telemetry Display (Right 7 Cols) -->
    <div class="lg:col-span-7 space-y-6">
      <div class="relative bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-75 overflow-hidden transition-colors">
        <div class="absolute top-4 left-4 text-xs font-mono text-neutral-500">
          CONTAINER: <span class="text-neutral-800 dark:text-neutral-300">Porcelain-Docker-v2</span>
        </div>

        <div
          class="relative w-56 h-56 rounded-full border-8 border-neutral-300 dark:border-neutral-700 bg-linear-to-tr from-amber-700 via-yellow-600 to-amber-800 shadow-2xl flex items-center justify-center transition-transform duration-500"
          :class="{ 'scale-105 rotate-3': isStirring }"
        >
          <div class="absolute inset-2 rounded-full border border-amber-400/20 bg-amber-600/30 backdrop-blur-xs flex items-center justify-center">
            <div class="text-center">
              <span
                class="text-4xl block transition-all"
                :class="{ 'animate-bounce': isStirring }"
              >🍲</span>
              <span class="text-[11px] font-mono font-bold tracking-wider text-amber-200 uppercase bg-black/50 px-2 py-0.5 rounded mt-1 inline-block max-w-45 truncate">
                {{ selectedSoupLabel }}
              </span>
            </div>
          </div>

          <div
            v-for="n in spoonCount"
            :key="n"
            class="absolute text-2xl transition-all duration-300 select-none"
            :style="{
              transform: `rotate(${(n * (360 / spoonCount))}deg) translate(80px) rotate(-${(n * (360 / spoonCount))}deg)`
            }"
          >
            🥄
          </div>
        </div>

        <div class="mt-6 text-center">
          <div class="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Status Check
          </div>
          <div
            class="text-sm sm:text-base font-bold mt-1"
            :class="soupStatus.color"
          >
            {{ soupStatus.text }}
          </div>
        </div>
      </div>

      <!-- Telemetry Progress Bars -->
      <div class="grid grid-cols-2 gap-4 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-colors">
        <div>
          <div class="flex justify-between text-xs font-mono mb-1.5">
            <span class="text-neutral-600 dark:text-neutral-400">Umami Retention</span>
            <span class="text-amber-600 dark:text-amber-400 font-bold">{{ flavourMetrics.umami }}%</span>
          </div>
          <div class="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div
              class="bg-amber-500 dark:bg-amber-400 h-full transition-all duration-300"
              :style="{ width: `${flavourMetrics.umami}%` }"
            />
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-mono mb-1.5">
            <span class="text-neutral-600 dark:text-neutral-400">DACH Bureaucracy Index</span>
            <span class="text-rose-600 dark:text-rose-400 font-bold">{{ flavourMetrics.bureaucracy }}%</span>
          </div>
          <div class="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div
              class="bg-rose-500 h-full transition-all duration-300"
              :style="{ width: `${flavourMetrics.bureaucracy}%` }"
            />
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-mono mb-1.5">
            <span class="text-neutral-600 dark:text-neutral-400">Salinity Overhead</span>
            <span class="text-sky-600 dark:text-sky-400 font-bold">{{ flavourMetrics.salt }}%</span>
          </div>
          <div class="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div
              class="bg-sky-500 dark:bg-sky-400 h-full transition-all duration-300"
              :style="{ width: `${flavourMetrics.salt}%` }"
            />
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-mono mb-1.5">
            <span class="text-neutral-600 dark:text-neutral-400">aws Grant Burn Rate</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">{{ flavourMetrics.runwayBurn }}k€/mo</span>
          </div>
          <div class="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div
              class="bg-emerald-500 dark:bg-emerald-400 h-full transition-all duration-300"
              :style="{ width: `${flavourMetrics.runwayBurn}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
