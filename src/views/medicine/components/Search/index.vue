<template>
  <div class="search">
      <input type="text" placeholder="查询药品">
      <span>搜索</span>
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
.search{
    @include wh(100%,44px);
    display: flex;
    flex-shrink: 0;
    // position: fixed;
    justify-content:space-around;
    align-items:center;
    input{
        @include wh(76%,30px);
        outline:none;
        border-radius: 12px;
        border: 0;
        padding: 0 10px;
    }
}
</style>
