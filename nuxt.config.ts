// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/image',
    '@sidebase/nuxt-pdf'
  ]
})