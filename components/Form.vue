<template>
  <form v-on:onsubmit="submit" class="d-block">
    <input :placeholder="t('form-name')" name="name" type="text" v-model="name" />
    <button type="submit">{{ t('form-submit')}}</button>
  </form>
  <textarea>
Name: "{{ name }}"
  </textarea>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>
<script lang="ts">

// import { computed, defineComponent, ref, useAsync, useContext, useFetch, useMeta } from '@nuxtjs/composition-api'

export default {
  data: () => {
    return {
      name: ''
    }
  },
  methods: {
    submit: (e) => {
      // FIXME:
      e.preventDefault()
      debugger
      console.log('submit', this.name);
    }
  }
}
</script>