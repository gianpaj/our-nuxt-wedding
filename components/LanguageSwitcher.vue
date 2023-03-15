<template>
  <div class="locale-switcher">
    <select v-model="locale">
      <option
        v-for="(lang, i) in availableLocales"
        :key="lang.code"
        :value="lang.key"
      >
        {{ lang.name }}
      </option>
    </select>
    <!-- <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      English
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'es'" :to="switchLocalePath('es')">
      Español
    </nuxt-link> -->
  </div>
</template>

<style scoped>
select {
  @apply bg-transparent;
}
</style>
<script lang="ts" setup>
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import { ref, onMounted } from "vue";
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  );
});

onMounted(() => {
  if (process.client) {
    // set default language
    const navLang = navigator.language;
    console.log("availableLocales", availableLocales.value);
    console.log("navLang", navLang);
    availableLocales.value.forEach((lang) => {
      if (navLang.startsWith(lang.code)) {
        console.log("setlocale navLang", navLang);
        setLocale(navLang);
      }
    });
  }
});
// methods: {
//   switchLocalePath(l) {
//     console.log('locale', l);
//   }
// },

// definePageMeta({
//   // title: 'pages.title.top',
//   // middleware: () => {
//   //   const localePath2 = useLocalePath()
//   //   console.log('middleware', localePath2({ name: 'blog' }))
//   // },
//   pageTransition: {
//     name: "page",
//     mode: "out-in",
//     onBeforeEnter: async () => {
//       const { finalizePendingLocaleChange } = useNuxtApp().$i18n;
//       await finalizePendingLocaleChange();
//       console.log("onBeforeEnter");
//     },
//   },
// });
</script>
