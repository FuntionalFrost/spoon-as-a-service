<script setup lang="ts">
const navLinks = [
  { label: 'Virtual Engine', to: '#demo' },
  { label: 'Zero-Code Cutlery', to: '#vibe-coding' },
  { label: 'Mittelstand Pricing', to: '#pricing' },
  { label: 'Compliance & Fax', to: '#compliance' }
]
</script>

<template>
  <header class="border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50 py-2.5 px-6 transition-colors">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <!-- Brand Logo & Title -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group"
      >
        <div class="w-9 h-9 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
          🥄
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-950 dark:text-white">
              SpaaS.ai
            </span>
            <UBadge
              color="warning"
              variant="subtle"
              size="xs"
              class="font-mono text-[10px] font-bold px-1.5 py-0.5"
            >
              v4.2-vibe
            </UBadge>
          </div>
          <span class="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase -mt-0.5">
            SPOON-AS-A-SERVICE
          </span>
        </div>
      </NuxtLink>

      <!-- Center Navigation Links -->
      <nav class="hidden lg:flex items-center gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-neutral-700 hover:text-amber-600 dark:text-neutral-300 dark:hover:text-amber-400 transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right Action Controls -->
      <div class="flex items-center gap-3">
        <UColorModeButton size="sm" />

        <UButton
          to="https://www.wko.at"
          target="_blank"
          label="Telefax Support"
          icon="i-lucide-printer"
          color="neutral"
          variant="outline"
          size="sm"
          class="hidden sm:inline-flex border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium"
        />

        <UButton
          label="Start Dipping"
          to="#demo"
          icon="i-lucide-sparkles"
          color="warning"
          variant="solid"
          size="sm"
          class="font-bold text-neutral-950 shadow-md shadow-amber-500/20"
        />
      </div>
    </div>
  </header>
</template>
