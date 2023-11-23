<template>
  <div class="h-full w-full flex items-center justify-center flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-normal">
      Complete tarefas para ganhar <span class="text-blue-600">pontos</span>
    </h2>
    <div class="rounded border w-full max-w-md h-auto min-h-[calc(56px*5)]">
      <div v-for="(task, index) in tasksStore.tasks" :key="index" class="w-full border-b p-3 h-14 flex items-center justify-between gap-3 group last:border-none">
        <input v-model="tasksStore.tasks[index]" :placeholder="index === 0 ? 'Escreva algo' : ''" class="w-full h-full outline-none bg-transparent" type="text">
        <div class="flex items-center gap-2">
          <UiButton
            v-if="tasksStore.tasks[index].length > 0"
            size="icon"
            variant="outline"
            class="hidden group-hover:block h-9 w-9"
            @click="tasksStore.doneTask(index)"
          >
            <Icon name="material-symbols:done-rounded" size="24" />
          </UiButton>
          <UiButton
            v-if="tasksStore.tasks[index].length > 0"
            size="icon"
            class="hidden group-hover:block h-9 w-9"
            variant="destructive"
            @click="tasksStore.deleteTask(index)"
          >
            <Icon name="material-symbols:close-rounded" size="24" />
          </UiButton>
        </div>
      </div>
    </div>
    <div class="w-full max-w-md flex flex-col items-start justify-center gap-2">
      <h3 class="font-medium">
        Nivel atual: <span class="h-5 w-5 bg-lime-300 text-secondary inline-flex items-center justify-center rounded-full">{{ tasksStore.level }}</span>
      </h3>
      <UiProgress v-model="tasksStore.progress" />
      <div class="w-full flex justify-between">
        <span>0</span><span>{{ tasksStore.expToNextLevel }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Todocise',
  description: 'Faça tarefas, complete exercícios e ganhe pontos!',
  ogTitle: 'Todocise',
  ogDescription: 'Faça tarefas, complete exercícios e ganhe pontos!',
  ogUrl: 'https://www.todocise.app/',
  ogImage: 'https://www.todocise.app/og.jpg',
  twitterImage: 'https://www.todocise.app/og.jpg',
  twitterTitle: 'Todocise',
  twitterDescription: 'Faça tarefas, complete exercícios e ganhe pontos!',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'pt-br'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
const tasksStore = useTasksStore()
</script>
