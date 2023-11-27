// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'script',
    manifest: {
      name: 'todocise',
      short_name: 'todocise',
      theme_color: '#09090B',
      background_color: '#09090B',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      description: 'A todo app with a twist',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable any'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: {
      enabled: true
    }
  },
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
  colorMode: {
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
    fallback: 'dark',
    preference: 'dark'
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
  },
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Faça tarefas, complete exercícios e ganhe pontos!'
        },
        {
          name: 'og:title',
          content: 'todocise'
        },
        {
          name: 'og:description',
          content: 'Faça tarefas, complete exercícios e ganhe pontos!'
        },
        {
          name: 'og:url',
          content: 'https://www.todocise.app/'
        },
        {
          name: 'og:image',
          content: 'https://www.todocise.app/og.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'todocise'
        },
        {
          name: 'twitter:description',
          content: 'Faça tarefas, complete exercícios e ganhe pontos!'
        },
        {
          name: 'twitter:image',
          content: 'https://www.todocise.app/og.jpg'
        },
        {
          name: 'twitter:creator',
          content: '@whywalcker'
        }
      ]
    }
  },
  devtools: { enabled: false }
})
