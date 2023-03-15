<template>
  <!-- <CThemeProvider> -->
  <div class="container my-10 mx-auto py-10 px-20">
    <Menu />
    <div class="prose">
      <slot />
    </div>
  </div>
  <!-- <CButton as="nuxt-link" to="/"> -->
  <!-- ⚡️ Oh, my Nuxt! -->
  <!-- </CButton>
  </CThemeProvider> -->
</template>

<style>
/* <link rel="preload" as="style" href="./default.css" /> */

body {
  @apply bg-green-100;
}

.container {
  filter: contrast(180%) brightness(100%);
  background: linear-gradient(
      67deg,
      rgba(106, 108, 94, 0.92),
      rgba(191, 192, 187, 0.79)
    ),
    url(/img/noise.svg);
}
</style>

<script>
// import { CThemeProvider, CReset, CButton } from '@chakra-ui/vue'
import Menu from "../components/Menu";

export default {
  name: "DefaultLayout",
  components: {
    Menu,
  },
  //     CThemeProvider,
  //     CReset,
  //     CButton
  //   }
};
</script>
