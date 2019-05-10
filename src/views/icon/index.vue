<template>
  <div>
     <svg-icon :iconClass="item"  v-for="(item,index) in icons" :key="index">
       {{icons}}
     </svg-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: []
    }
  },
  methods: {
    getIcons () {
      const req = require.context('../../assets/icons', false, /\.svg$/)
      this.icons = req.keys().map((path) => {
        return path.substr(2).replace('.svg', '')
      })
    }
  },
  created () {
    this.getIcons()
  }
}
</script>
<style scoped lang="scss">

</style>
