<template>
  <header class="w-full">
    <nav class="flex justify-between my-5">
      <ul class="flex">
        <li>
          <NuxtLink to="/">
            {{ t('home') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/accommodation">
            {{ t('accommodation') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rsvp">
            {{ t('rsvp-title') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/registry">
            {{ t('registry') }}</NuxtLink>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  </header>

</template>

<style>
.router-link-active {
  text-decoration: none;
}

header nav li {
  @apply text-white;
  list-style: none;
  padding-right: 2em;
  text-transform: uppercase;
}

.router-link-active {
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<script lang="ts">
export default {
  name: 'RSVP',
  components: {
  }
}
</script>