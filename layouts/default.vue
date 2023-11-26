<template>
  <div class="grid grid-rows-[64px_1fr_64px] h-full">
    <header class="w-full h-full flex items-center justify-around">
      <NuxtLink class="text-4xl font-semibold active:scale-90 transition-transform" to="/">
        todocise
      </NuxtLink>
      <section class="w-auto flex gap-5">
        <UiButton :aria-label="`Modo de cor ${$colorMode.preference}`" variant="ghost" @click="toggleColorMode">
          <Icon class="md:mr-2" name="material-symbols:dark-mode-outline" size="24" />
          <span class="hidden text-lg md:block">{{ $colorMode.preference }} mode</span>
        </UiButton>
        <UiButton aria-label="Limpar todas as tarefas" variant="ghost" @click="tasksStore.clearTasks()">
          <Icon class="md:mr-2" name="material-symbols:delete-outline" size="24" />
          <span class="hidden md:block text-lg ">limpar tudo</span>
        </UiButton>
      </section>
    </header>
    <main class="h-full w-full flex items-center justify-center px-2">
      <slot />
    </main>
    <footer />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const tasksStore = useTasksStore()
const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<style>

</style>
