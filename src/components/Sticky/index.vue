<template>
  <div class="sticky">
     <div class="content" >
       <slot></slot>
     </div>
  </div>
</template>
<script>
export default {
  props: {

  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.sticky{
  width: 100%;
  top:0;
  position: sticky;
  width: 100%;
}
</style>
