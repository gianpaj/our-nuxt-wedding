<template>
  <h1>{{ t('rsvp') }}</h1>
  <p>{{ t('hi') }}</p>
</template>


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