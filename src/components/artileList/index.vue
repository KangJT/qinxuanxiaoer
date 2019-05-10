
<template>
  <div>
      <ul class="datalist" @scroll="paperScroll()">
        <li v-for="(item,index) in list" :key="index" @click="goDetail(item.content_id)">
            <img :src="item.cover" alt class="left">
          <div class="right">
            <div class="top">
              <h2>{{item[titleName]}}</h2>
              <h3>{{item.description}}</h3>
              <h4>{{item[contentName]}}</h4>
            </div>
            <p>2019年01月22日</p>
          </div>
        </li>
     </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    titleName: {
      type: String,
      default: 'title'
    },
    contentName: {
      type: String,
      default: 'contnet'
    }
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
    goDetail (id) {
      this.$router.push({
        path: '/active/detail/' + id
      })
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.main-body {
  overflow: scroll;
}
.datalist {
  width: 100%;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  flex-direction: column;
  li {
    width: 100%;
    display: flex;
    height: 80px;
    margin: 10px 0;
    .left {
      width: 30%;
      border: 1px solid #dddddd;
    }
    .right {
      flex: 1;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .top {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #5B5A61;
          font-size: 15px;
        }
        h4{
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
           font-size: 10px;
        }
      }
    }
  }
}
</style>
