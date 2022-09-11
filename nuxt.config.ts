import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    //
    "@nuxt/content",
    "@intlify/nuxt3",
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
  }
  // chakra: {
  //   extendTheme: {
  //     colors: {
  //       brand: { /* ... */ }
  //     }
  //   }
  // }
});
