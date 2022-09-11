<template>
  <!-- <CThemeProvider> -->
  <Menu />
  <slot />
  <!-- <CButton as="nuxt-link" to="/"> -->
  <!-- ⚡️ Oh, my Nuxt! -->
  <!-- </CButton>
  </CThemeProvider> -->
</template> 

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