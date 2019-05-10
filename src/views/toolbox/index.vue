<template>
    <div class="page toolbox">
        <Menu ref="menu"/>
        <scroll-view  @scroll="scrollBottom" :flg="scrollFlg">
           <tabs @change="tabChange"  class="content active-list">
             <tab-pane label="精彩文章">
                <ArtileList :list="list"/>
             </tab-pane>
             <tab-pane label="安全须知">
                <ArtileList :list="list"/>
             </tab-pane>
           </tabs>
        </scroll-view>
    </div>
</template>
<script>

import {Tabs, TabPane} from '@/components/tabbar/index.js'
import ArtileList from '@/components/artileList'
import Menu from './components/Menu.vue'

export default {
  components: {
    Tabs,
    TabPane,
    ArtileList,
    Menu
  },
  data () {
    return {
      type_id: 2,
      scrollFlg: true,
      offset: 0,
      list: [], // 初始默认2的数据
      loadData: true
    }
  },
  created () {
    this.$api.user.user()
    this.getList()
  },
  methods: {
    // 获取数据
    getList () {
      // 登录的请求数据
      // 文章列表的请求
      console.log(this.offset, 'sd')
      this.$api.article.list({
        limit: 15,
        offset: this.offset * 15,
        type_id: this.type_id
      }).then((data) => {
        if (this.offset === 0) {
          this.list = []
          console.log(1)
          this.list = data
          this.scrollToTop()
        }
        this.list = this.list.concat(data.map((item) => {
          let url = item.url
          if (!url) {
            url = `active/detail/${item.content_id}`
          }
          return {...item, link: url}
        }))
        this.scrollFlg = true
        if (data.length < 15) {
          this.loadData = false
        }
      })
    },
    // tab切换数据
    tabChange (index) {
      this.offset = 0
      this.loadData = true
      this.type_id = index === 0 ? 2 : 1 // 匹配接口type_id
      this.getList()
    },
    // 触发到底部事件
    scrollBottom () {
      if (!this.loadData) return
      this.scrollFlg = false
      this.offset += 1
      this.getList()
    },
    // 吸顶效果
    scrollToTop () {
      const menu = this.$refs.menu.$el
      const scrollTop = window.scrollY
      const menuHeight = menu.clientHeight
      console.log(menu, scroll, menuHeight, 'sss')
      if (scrollTop - 122 > menuHeight) {
        window.scrollTo(0, menuHeight)
      }
    }
  }
}
</script>
<style scoped lang="scss">
 .listclassify{
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    @include wh(100%,120px);
    text-align: center;
    align-items: center;
    li{
       flex: 1;
       width: 30%;
        img{
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius:50%;
        }
        p{
            text-align: center;
            margin:5px 0;
        }
    }
}
.active-list {
  .tabs-header {
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.05);
  }
}
</style>
