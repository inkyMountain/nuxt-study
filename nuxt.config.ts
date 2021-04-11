import { NuxtConfig } from '@nuxt/types'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
console.log('isDev', isDev)

const nuxtConfig: NuxtConfig = {
  router: {
    base: '/d/snack'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    exclude: [/\/.*/],
    routes: ['/']
  },
  alias: {
    images: path.resolve(__dirname, './assets/images')
  },
  head: {
    title: 'nuxt-study',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: [],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/router'
    // [
    //   '~/modules/hello-nuxt-module/index.ts',
    //   {
    //     optionKey: 'optionValue',
    //   },
    // ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // When dev, js file path would be 'http://localhost:3000/xxx/yyy'. And
    // 'https://cdn.nuxtjs.org/xxx/yyy' if in production.
    // publicPath shouldn't include domain or it would be ignored and use
    // /_nuxt/ as fallback.
    publicPath: isDev ? '/xxx/yyy' : 'https://cdn.nuxtjs.org/xxx/yyy',
    filenames: {
      // app: ({
      //   isDev,
      //   isModern
      // }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      // chunk: ({
      //   isDev,
      //   isModern
      // }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      // css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash:7].css',
      // img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      // font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
      // video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
    },

    extend(config, { isDev }) {
      if (isDev) {
        // config.devtool = 'eval-source-map'
      }
    }
  },

  cli: {
    bannerColor: 'cyan',
    badgeMessages: ['陈亦涛']
  }
}

export default nuxtConfig
