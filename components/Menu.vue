<template>
  <ul>
    <li>
      <NuxtLink to="/">{{ t('accommodation') }}</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/rsvp">{{ t('rsvp') }}</NuxtLink>

    </li>
  </ul>
</template>

<style>
.router-link-active {
  text-decoration: none;
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
    // import accommodation  from '../content/info'
</script>