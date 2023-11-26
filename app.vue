<template>
  <div class="h-[100dvh] bg-background">
    <Head>
      <Title>todocise</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="Faça tarefas, complete exercícios e ganhe pontos!" />
      <Meta name="og:title" content="todocise" />
      <Meta name="og:description" content="Faça tarefas, complete exercícios e ganhe pontos!" />
      <Meta name="og:url" content="https://www.todocise.app/" />
      <Meta name="og:image" content="https://www.todocise.app/og.jpg" />
      <Meta name="twitter:title" content="todocise" />
      <Meta name="twitter:description" content="Faça tarefas, complete exercícios e ganhe pontos!" />
      <Meta name="twitter:image" content="https://www.todocise.app/og.jpg" />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:creator" content="@whywalcker" />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
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
