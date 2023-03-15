// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  // builder: 'webpack', // default: 'vite'
  modules: [
    'nuxt-windicss',
    "@nuxt/content",
    '@nuxtjs/i18n',
    // '@vueuse/nuxt'
  ],
  // disable generating the shim for *.vue files
  // typescript: {
  //   shim: false,
  // },
  // intlify: {
  //   localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
  // },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español'
      }
    ],
    // lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    // detectBrowserLanguage: {
    //   // redirect to user browser's language every time they visit the app
    //   useCookie: false
    // },
    vueI18n: {
      legacy: false,
      locale: 'en',
      // messages: {
      //   en: {
      //     welcome: 'Welcome'
      //   },
      //   es: {
      //     welcome: 'Bienvenue'
      //   }
      // }
    }
  },
  // windicss: {
  //   analyze: true,
  // },
  // content: {
  //   documentDriven: true
  // },
  css: [
    'virtual:windi.css',
    'virtual:windi-devtools',
    // your stylesheets which overrides the preflight
    '@/css/main.css',
  ],
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: [
  //       '/',
  //     ],
  //   },
  // },
});
