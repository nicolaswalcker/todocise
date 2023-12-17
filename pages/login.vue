<template>
  <div class="bg-background fixed h-screen w-full z-10 flex flex-col justify-center items-center">
    <article class="flex flex-col items-center justify-center max-w-xl px-4 gap-4">
      <h1 class="sm:text-xl font-semibold">
        Primeiro vamos nos conhecer, qual o seu nome?
      </h1>
      <UiInput v-model="username" placeholder="Digite seu nome" />
      <UiButton
        class="w-full"
        variant="outline"
        :disabled="username.length === 0"
        @click="submitUsername"
      >
        Vamos lá!
      </UiButton>
    </article>
  </div>
</template>

<script lang="ts" setup>
const username = ref('')
definePageMeta({
  layout: 'login',
  middleware: 'username',
  pageTransition: transitionConfig,
  layoutTransition: transitionConfig
})
const router = useRouter()
const submitUsername = () => {
  if (username.value.length > 0) {
    localStorage.setItem('username', username.value)
    router.push('/')
  }
}
</script>
