<template>
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { useTransition } from '@/composables/transition'

const { toggleTransitionComplete } = useTransition()

onMounted(() => {
  toggleTransitionComplete(true)
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  }
})
</script>
