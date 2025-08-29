// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: 'Keepio – Organize your projects with clarity and simplicity. The minimalist iOS app for managing tasks, notes, and progress tracking.' },
      ]
    }
  },
  routeRules: { "/": { prerender: true, }, },
  experimental: {
    payloadExtraction: false
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],
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