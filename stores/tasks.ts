import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasksLimit = ref(5)
  const tasks = ref<Array<string>>(new Array(tasksLimit.value).fill(''))
  const level = ref(1)
  const exp = ref(0)
  const expToNextLevel = ref(100)
  const actualStreak = ref(0)

  const progress = computed(() => {
    return Math.round((exp.value / expToNextLevel.value) * 100)
  })

  const countTasks = computed(() => {
    return tasks.value.filter(task => task !== '').length
  })

  const isTasksEmpty = computed(() => {
    return tasks.value.every(task => task === '')
  })

  const doneTask = (index: number) => {
    tasks.value[index] = ''
    exp.value += Math.round(10 * (level.value / 1.5))
    actualStreak.value++

    if (actualStreak.value % 3 === 0) {
      exp.value += Math.round(50 * (level.value / 1.5))
    }
    if (exp.value >= expToNextLevel.value) {
      level.value++
      if (level.value % 5 === 0) {
        tasksLimit.value += 1
        tasks.value = new Array(tasksLimit.value).fill('')
      }
      expToNextLevel.value *= 1.5
      exp.value = 0
    }
  }

  const deleteTask = (index: number) => {
    tasks.value[index] = ''
    actualStreak.value = 0
    if (exp.value <= Math.round(5 * (level.value / 1.5))) {
      exp.value = 0
    } else {
      exp.value -= Math.round(5 * (level.value / 1.5))
    }
  }
  const clearTasks = () => {
    tasks.value = new Array(tasksLimit.value).fill('')
    actualStreak.value = 0
  }

  return {
    tasksLimit,
    tasks,
    level,
    exp,
    expToNextLevel,
    actualStreak,
    progress,
    countTasks,
    isTasksEmpty,
    doneTask,
    clearTasks,
    deleteTask
  }
}, {
  persist: {
    key: 'tasks',
    storage: persistedState.localStorage
  }
})
