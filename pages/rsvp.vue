<template>
    <h1>RVSP</h1>
    <p>{{ t('hi') }}</p>
    <LanguageSwitcher />
</template>


<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
</script>
<script lang="ts">
    import LanguageSwitcher from '../components/LanguageSwitcher'
    export default {
        name: 'RSVP',
        components: {
            LanguageSwitcher
        }
}
</script>