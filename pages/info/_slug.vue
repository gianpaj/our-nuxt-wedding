<template>
  <main>
    <div>
      <!-- This page correctly has only one single root element -->
      Page info
    </div>
    <!-- <p>{{ $route.params.slug }}</p>
   -->
    <ContentDoc />
  </main>
</template>

<script setup>
definePageMeta({ pageTransition: false })
</script>