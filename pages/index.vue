<template>
  <div class="h-full w-full flex items-center justify-center flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-normal">
      Complete tarefas para ganhar <span class="font-bold" :class="textColor">pontos</span>
    </h2>
    <div class="rounded border w-full max-w-md h-auto min-h-[calc(56px*5)]">
      <draggableComponent
        v-bind="dragOptions"
        v-model="tasksStore.tasks"
        fallback-class="fallbackStyleClass"
        :force-fallback="true"
        handle=".handle"
        item-key="index"
        @change="onDragUpdate"
      >
        <template #item="{index}">
          <div :key="index" class="w-full border-b p-3 h-14 flex items-center justify-between gap-3 group last:border-none">
            <input v-model="tasksStore.tasks[index]" :aria-label="`Tarefa ${index}`" :placeholder="index === 0 ? 'Escreva algo' : ''" class="w-full h-full outline-none bg-transparent text-xl" type="text">
            <div class="flex items-center gap-2">
              <Icon v-if="tasksStore.tasks[index].length > 0" name="material-symbols:drag-pan-rounded" size="24" class="!hidden group-hover:!block handle cursor-move show" />
              <UiButton
                v-if="tasksStore.tasks[index].length > 0"
                size="icon"
                variant="outline"
                class="hidden group-hover:block h-9 w-9 show"
                @click="tasksStore.doneTask(index)"
              >
                <Icon name="material-symbols:done-rounded" size="24" />
              </UiButton>
              <UiButton
                v-if="tasksStore.tasks[index].length > 0"
                size="icon"
                class="hidden group-hover:block h-9 w-9 show"
                variant="destructive"
                @click="tasksStore.deleteTask(index)"
              >
                <Icon name="material-symbols:close-rounded" size="24" />
              </UiButton>
            </div>
          </div>
        </template>
      </draggableComponent>
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
import draggableComponent from 'vuedraggable'
useHead({
  title: 'todocise',
  htmlAttrs: {
    lang: 'pt-BR'
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

const onDragUpdate = () => {
  tasksStore.tasks.sort((a, b) => {
    if (a === '' && b !== '') {
      return 1
    } else if (a !== '' && b === '') {
      return -1
    } else {
      return 0
    }
  })
}
const dragOptions = {
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
  chosenClass: 'chosen',
  sort: true
}

const colorMode = useColorMode()

const textColor = computed(() => {
  return colorMode.preference === 'light' ? 'text-indigo-700' : 'text-lime-500'
})
</script>

<style>
.chosen{
  @apply bg-background select-none !opacity-100 shadow-lg !border;
}

.chosen .show {
  @apply  block;
}

.ghost {
  @apply !opacity-0;
}
</style>
