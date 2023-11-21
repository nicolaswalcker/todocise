// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt'
  ],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: 'Ui',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  },
  devtools: { enabled: true }
})
