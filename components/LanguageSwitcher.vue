<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.key">
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

<script lang="ts">
export default {
  name: 'locale-switcher',
  created() {
    if (process.client) {
      // set default language
      const navLang = navigator.language
      if (this.langs.some(lang => lang.key === navLang)) {
        this.$i18n.locale = navLang
      }
    }
  },
  // methods: {
  //   switchLocalePath(l) {
  //     console.log('locale', l);
  //   }
  // },
  data() {
    return {
      langs: [
        { key: 'es', name: 'Español' },
        { key: 'en', name: 'English' }
      ]
    }
  }
}
</script> 