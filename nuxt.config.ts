import paths from './paths';

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
  modules: [
    '@nuxtjs/prismic',
    '@zadigetvoltaire/nuxt-gtm'
  ],
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
          path: paths.single_page(':uid'),
        },
        {
          type: 'homepage',
          uid: 'home',
          path: paths.home,
        },
        {
          type: 'about_page_type',
          uid: 'about-dan',
          path: paths.single_page('about-dan'),
        },
        {
          type: 'articles_page_type',
          uid: 'articles-and-presentations',
          path: paths.single_page('articles-and-presentations'),
        },
        {
          type: 'case_study',
          path: paths.portfolio_page(':uid'),
        }
      ]
    }
  },
  gtm: {
    id: 'GTM-MRDBF6QQ',
  }
});