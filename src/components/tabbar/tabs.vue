<template>
  <div class="tabs">
     <!-- <scrollView @scroll="getScroll" :flg="scrollFlg"> -->
      <header class="tabs-header">
        <nav>
          <ul class="table">
             <li v-for="(item,index) in menu"
                 :key="index"
                 :class="{active:index===activeIndex}"
                 @click="change(index)"
                 href="javascript:;">{{item}}</li>
          </ul>
        </nav>
      </header>
      <div class="content">
        <slot></slot>
      </div>
    <!-- </scrollView> -->
  </div>
</template>
<script>
// import scrollView from '@/components/scroll-view'
export default {
  name: 'Tabs',
  components: {
    // scrollView
  },
  data () {
    return {
      menu: [],
      activeIndex: 0,
      scrollFlg: true,
      params: {
        limit: 6, // 条数
        offset: 0, // 开始值
        type_id: 2 // 1是安全用药   2是精彩文章
      }
    }
  },
  props: {
    defaultActive: {// 默认的第一份插槽
      type: Number,
      default: 0
    }
  },
  methods: {
    initMenu () {
      this.menu = this.$children.map(child => child.label)
      this.$children[this.activeIndex].isShow = true// 默认的第一份插槽
    },
    change (index) {
      this.activeIndex = index
      this.$children.forEach((child, i) => {
        if (index === i) {
          this.$children[index].isShow = true
        } else {
          this.$children[i].isShow = false
        }
      })
      this.$emit('change', index)// 传给父组件下标 从而请求数据
    },
    getData (params) {
      console.log(this.$api)
      this.$api.article
        .list({
          params: params
        })
        .then(data => {
          if (params.offset === 0) {
            this.data = data
          } else {
            this.data = this.data.concat(data)
          }
          this.scrollFlg = true
        })
    },
    getScroll () {
      this.scrollFlg = false
      this.params.offset += 1
      this.params.limit += 6
      this.getData(this.params)
    }
  },
  created () {

  },
  mounted () {
    this.initMenu()
  }
}
</script>
<style scoped lang="scss">
.tabs{
  @include wh(100%,auto);
  // display: flex;
  position: sticky;
  top:0;
  .tabs-header{
  @include wh(100%,44px);
    nav{
    @include box_flex();
    line-height: 44px;
    a{
      flex: 1;
      font-size: 14px;
      text-align: center;
      color: $color-text-primary;
      &.active{
        color:  $color-base
      }
     }
    }
  }
}
.table{
    border-bottom:1px solid #dddddd;
    width: 100%;
    height: 40px;
    background: #ffffff;
    display: flex;
    line-height: 40px;
    position: sticky;
    top: 0;
    li{
        width: 100px;;
        height:40px;
        text-align: center;
        margin: 0 20px;
        flex: 1;
        font-size: 12px;
    }
    .active{
       border-bottom:2px solid red;
       padding: 0
    }
}
</style>
