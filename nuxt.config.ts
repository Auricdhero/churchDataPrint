import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
          integrity: "sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==",
          crossorigin: "anonymous", referrerpolicy: "no-referrer"
        }
      ],
    },

  },
  modules: [
    '@vueuse/nuxt'
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      // config.plugins.push(
      //   vuetify({
      //     styles: { configFile: resolve('./settings.scss') },
      //   })
      // )
    }
  },
  plugins: ['~/plugins/print.js'],
})