// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },
  imports:{
    dirs:['stores']
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      API_BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
      // Add more environment variables as needed
    },
  },
})