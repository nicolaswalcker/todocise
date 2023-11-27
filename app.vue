<template>
  <div class="h-[100dvh] bg-background">
    <NuxtLayout>
      <VitePwaManifest />
      <RouterView />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

</script>
