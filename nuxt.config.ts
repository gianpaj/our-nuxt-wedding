import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  // disable generating the shim for *.vue files
  typescript: {
    shim: false,
  },
});
