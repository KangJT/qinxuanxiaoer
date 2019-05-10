<template>
    <div class="wraps">
        <Search />
        <Menu @changeList="menuChange"/>
         <scroll-view @scroll="scrollBottom" :flg="scrollFlg">
           <ArtileList :list="list" title-name="common_name" content-name="specification" cover-name="picture" />
           <!-- <ArtileList
            v-for="(item, index) in list"
            :key="index"
            :title-name="item.common_name"
            :content-name="item.specification"
            :cover-name="item.picture"
            :url="item.url" /> -->

       </scroll-view>
        <footer-nav />
    </div>
</template>
<script>
import ArtileList from '@/components/artileList'
import FooterNav from '@/components/footerNav'
import Search from './components/Search'
import Menu from './components/Menu'
export default {
  components: {
    FooterNav,
    ArtileList,
    Search,
    Menu
  },
  data () {
    return {
      offset: 0,
      list: [],
      scrollFlg: true,
      // 点击分类要请求的参数
      query: {
        offset: 0,
        limit: 15,
        category_name: ''
      }
    }
  },
  methods: {
    menuChange (index, item) {
      // ？
      this.query = Object.assign({}, this.query, {
        offset: 0,
        limit: 15,
        category_name: item
      })
      this.list = []
      this.getMedicineList()
    },
    async getMedicineList () {
      console.log(this.query, 'query')
      let data = await this.$api.medicine.list(this.query)
      this.list = this.list.concat(data.map((item) => {
        return {...item, link: `/medicine/detail/${item.medicine_id}`}
      }))
      /*  console.log(this.query, 'query')
      const data = this.$api.medicine.list(this.query)
      this.list = this.list.concat(data.map((item) => {
        return {...item, link: `/medicine/detail/${item.medicine_id}`}
      }))
      console.log(this.list) */
      this.scrollFlg = true
    },
    scrollBottom () {
      this.scrollFlg = false
      this.query.offset += 1
      this.getMedicineList()
    }
  },
  created () {
    this.getMedicineList()
  }
}
</script>

<style lang="scss" scoped>
.wraps{
    @include wh(100%,100%)
}

.product{
    @include wh(100%,auto);
    dl{
        display:flex;
        height:80px;
        margin-top:10px;
        border-top: 1px solid #ccc;
      dt{
          width:30%;
          text-align:center;
          line-height:80px;
      }
      dd{
           width:170px;
           line-height:30px;
          p{
          text-overflow:ellipsis;
          overflow: hidden;
          white-space: nowrap;
          }
      }
    }
}
.fontsize{
  font-size: 12px;
  text-align: center;
}
</style>
