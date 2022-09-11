<template>
  <!-- <CThemeProvider> -->
  <Menu />
  <slot />
  <!-- <CButton as="nuxt-link" to="/"> -->
  <!-- ⚡️ Oh, my Nuxt! -->
  <!-- </CButton>
  </CThemeProvider> -->
</template> 

<style>
/* <link rel="preload" as="style" href="./default.css" /> */

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.d-inline-block {
  display: block;
}
</style>

<script>
// import { CThemeProvider, CReset, CButton } from '@chakra-ui/vue'
import Menu from '../components/Menu'

export default {
  name: 'DefaultLayout',
  components: {
    Menu
  }
  //     CThemeProvider,
  //     CReset,
  //     CButton
  //   }
}
</script>