<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-amber-400 selection:text-black transition-colors duration-200">
    <AppBanner />
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <USeparator
      icon="i-lucide-utensils"
      class="my-4"
    />
    <AppFooter />
  </div>
</template>
