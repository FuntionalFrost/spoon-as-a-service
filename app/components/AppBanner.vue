<script setup lang="ts">
const bannerText = 'aws Pre-Seed & FFG Basisprogramm Co-Financed'
const statusBadge = 'WKO Gewerbeschein: Pending'
</script>

<template>
  <aside class="bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 text-neutral-950 font-bold py-2 px-4 text-center text-xs sm:text-sm flex flex-wrap items-center justify-center gap-2.5 shadow-sm transition-colors">
    <div class="flex items-center gap-1.5">
      <span>🇦🇹</span>
      <span>{{ bannerText }}</span>
    </div>
    <span class="hidden sm:inline text-neutral-950/40 text-xs">•</span>
    <span class="text-[11px] font-mono font-bold bg-black/20 text-neutral-950 px-2 py-0.5 rounded border border-black/15 uppercase tracking-wide">
      {{ statusBadge }}
    </span>
  </aside>
</template>
