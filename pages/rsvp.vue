<template>
  <h1 class="text-2xl">{{ t('rsvp-title') }}</h1>
  <p>{{ t('rsvp-hi') }}</p>
  <p>{{ d(new Date('2023-11-11'), { dateStyle: 'full' }) }}</p>
  <Form />
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// import Form from '~~/components/Form.vue';

const { t, d } = useI18n();
</script>

<script lang="ts">
export default {
  name: 'RSVP',
  components: {
    // Form
  }
}
</script>