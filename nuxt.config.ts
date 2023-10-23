import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  css: [
    '/assets/html.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss-lib";',
        },
      },
    },
  },
  modules: ['@nuxtjs/prismic'],
  image: {
    provider: "prismic",
    prismic: {},
    screens: {
      "small": 600,
      "medium": 800,
      "large": 1200,
    }
  },

  prismic: {
    endpoint: 'dan-hiester-design',
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
          type: 'case_study',
          path: '/portfolio/:uid',
        }
      ]
    }
  },
})