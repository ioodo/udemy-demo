// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/style/global.scss'],
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
  vite: {
    plugins: [svgLoader()]
  }
})