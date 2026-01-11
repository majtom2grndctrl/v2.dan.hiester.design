import paths from './app/paths';

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
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (element) => element.startsWith('deeper-details')
    }
  },
  css: ['@/assets/html.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss-lib" as *;
            @use "@/assets/webfonts";
          `,
        },
      },
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/prismic',
    '@zadigetvoltaire/nuxt-gtm',
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
  plugins: [
    '~/plugins/deeper-details.client.ts',
    '~/plugins/vue-vimeo-player.client.ts'
  ],
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
          path: paths.about,
        },
        {
          type: 'articles_page_type',
          uid: 'articles-and-presentations',
          path: paths.articles,
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
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/articles-and-presentations',
        '/portfolio'
      ]
    },
    preset: 'netlify-static'
  }
});
