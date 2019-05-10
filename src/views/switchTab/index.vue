<template>
  <div>
     <router-view />
     <footer-nav />
  </div>
</template>
<script>

import FooterNav from '@/components/footerNav'
export default {
  components: {
    FooterNav
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="">

</style>
