import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // builder: 'webpack', // default: 'vite'
  modules: [
    //
    'nuxt-windicss',
    "@nuxt/content",
    "@intlify/nuxt3",
    '@vueuse/nuxt',
  ],
  // disable generating the shim for *.vue files
  typescript: {
    shim: false,
  },
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    // vueI18n: {
    //   // ...
    // }
  },
  css: [
    'virtual:windi.css',
    'virtual:windi-devtools',
    // your stylesheets which overrides the preflight
    '@/css/main.css',
  ],
  // chakra: {
  //   extendTheme: {
  //     colors: {
  //       brand: { /* ... */ }
  //     }
  //   }
  // }
});
