<template>
  <h1>{{ t('rsvp-title') }}</h1>
  <p>{{ t('rsvp-hi') }}</p>
  <Form />
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// import Form from '~~/components/Form.vue';
const { t } = useI18n();
</script>
<script lang="ts">
export default {
  name: 'RSVP',
  components: {
    // Form
  }
}
</script>