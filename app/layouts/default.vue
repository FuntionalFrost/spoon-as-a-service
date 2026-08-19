<template>
  <div class="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-black">
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
