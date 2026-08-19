<script setup lang="ts">
const config = useRuntimeConfig()

withDefaults(defineProps<{
  label?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'outline' | 'subtle' | 'ghost'
  hideLabelOnMobile?: boolean
}>(), {
  label: 'Buy Us a Broth',
  size: 'sm',
  variant: 'outline',
  hideLabelOnMobile: true
})
</script>

<template>
  <UButton
    :to="config.public.paddleCheckoutUrl"
    target="_blank"
    rel="noopener noreferrer"
    icon="i-lucide-coffee"
    color="primary"
    :size="size"
    :variant="variant"
    class="font-medium"
  >
    <span :class="{ 'hidden sm:inline': hideLabelOnMobile }">
      {{ label }}
    </span>
  </UButton>
</template>
