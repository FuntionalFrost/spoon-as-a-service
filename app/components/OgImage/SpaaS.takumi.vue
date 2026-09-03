<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Spoon as a Service',
  description: 'Disproving Austrian proverbs via zero-code cloud cutlery mesh.'
})
</script>

<template>
  <div class="w-full h-full bg-neutral-950 text-white flex flex-col justify-between p-16 border-8 border-amber-500 font-sans">
    <!-- Top Row -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-4xl font-bold">
          🥄
        </div>
        <div>
          <div class="text-3xl font-bold tracking-tight text-white">
            SpaaS
          </div>
          <div class="text-sm font-mono text-amber-400 uppercase tracking-widest">
            SPOON-AS-A-SERVICE
          </div>
        </div>
      </div>

      <div class="text-sm font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-4 py-1.5 rounded-full">
        🇦🇹 aws & FFG Co-Financed
      </div>
    </div>

    <!-- Center Content (Replaced space-y-4 with flex gap-4) -->
    <div class="my-auto flex flex-col gap-4">
      <h1 class="text-5xl font-bold leading-tight text-white max-w-4xl">
        {{ title }}
      </h1>
      <p class="text-2xl text-neutral-400 max-w-3xl">
        {{ description }}
      </p>
    </div>

    <!-- Bottom Metrics Strip -->
    <div class="flex items-center justify-between border-t border-neutral-800 pt-6 font-mono text-sm text-neutral-400">
      <div class="flex items-center gap-6">
        <span>● 0.00% Manual Code</span>
        <span>● ISO-9001 Cutlery Spec</span>
        <span>● Telefax API Ready</span>
      </div>
      <div class="text-amber-400 font-bold">
        spoon-as-a-service.pages.dev
      </div>
    </div>
  </div>
</template>
