// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: '/keepio-landing-page/',
    buildAssetsDir: '_nuxt/',
    cdnURL: '/keepio-landing-page'
  },
  nitro: {
    preset: 'github_pages',
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/assets/css/app.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    },
    locales: [
      { code: 'fr', name: 'French', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  }
})