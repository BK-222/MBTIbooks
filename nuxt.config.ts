// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  css: ['@/assets/css/main.css', '@/assets/css/transitions.css'],
  app: {
    pageTransition: {
      name: 'route',
      mode: 'out-in'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
