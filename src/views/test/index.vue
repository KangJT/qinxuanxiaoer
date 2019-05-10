<template>
  <div>
    <h2>{{list.title}}</h2>
```````````详情```````````
     <h1>{{this.$route.params.id}}</h1>

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
      list: []
    }
  },
  computed: {

  },
  methods: {
    getDetailList () {
      this.$api.article.detail({
        content_id: this.$route.params.id
      }).then((data) => {
        this.list = data
      })
    }
  },
  created () {
    this.getDetailList()
  },
  mounted () {

  }
}
</script>
<style scoped lang="">

</style>
