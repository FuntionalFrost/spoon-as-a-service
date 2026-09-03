<template>
  <footer class="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 py-12 px-6 transition-colors">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex flex-col gap-2 text-center md:text-left">
        <p class="font-semibold text-base text-neutral-900 dark:text-neutral-200">
          © {{ new Date().getFullYear() }} SpaaS Technologies GmbH i.Gr. (Vienna • Berlin • Ibiza Co-Working)
        </p>
        <p class="text-sm text-neutral-600 dark:text-neutral-500">
          Certified ISO-9001 Virtual Cutlery • 0 manual lines of code written
        </p>
      </div>

      <div class="flex items-center gap-6 text-sm sm:text-base font-mono text-neutral-600 dark:text-neutral-400">
        <NuxtLink
          to="#compliance"
          class="hover:text-amber-600 dark:hover:text-amber-400 transition"
        >Impressum (§ 5 ECG)</NuxtLink>
        <NuxtLink
          to="#compliance"
          class="hover:text-amber-600 dark:hover:text-amber-400 transition"
        >DSGVO Formulare</NuxtLink>
        <UButton
          to="https://github.com/FuntionalFrost/spoon-as-a-service"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
          size="md"
        />
      </div>
    </div>
  </footer>
</template>
