<script setup lang="ts">
const title = 'SpaaS.ai — Spoon as a Service | Enterprise Broth Disruption'
const description = 'Disproving Austrian proverbs via API. The zero-code cloud cutlery mesh for DACH startups.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0a0a0a' }
  ],
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥄</text></svg>'
    }
  ],
  htmlAttrs: { lang: 'de-AT' }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&auto=format&fit=crop&q=80',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
