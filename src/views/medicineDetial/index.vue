<template>
    <div class="wrap">
        <div class="header">
            <div class="left">
                <img :src='listdata.picture' alt="">
            </div>
            <div class="right">
                <p>{{listdata.common_name}}</p>
                <p>{{listdata.indication}}</p>
                <p :class="listdata.is_otc=='是'?'bordercolor':''">{{listdata.is_otc=='是'?'OTC':''}}</p>
            </div>
        </div>
        <tabs>
            <tab-pane label="基本信息">
               <!-- <ArtileList :list="baseList"/> -->
                <p>通用名:{{listdata.product_name}}</p>
                <p>商品名称:{{listdata.product_name}}</p>
                <p>分类名称:{{listdata.category_name}}</p>
                <p>药物分类:{{listdata.drug_category}}</p>
                <p>是否OTC:{{listdata.is_otc}}</p>
                <p>规格:{{listdata.specification}}</p>
                <p>药品成分:{{listdata.good_category}}</p>
                <p>生产企业:{{listdata.manufacturer}}</p>
                <p>批准文号:{{listdata.approval_number}}</p>
            </tab-pane>
            <tab-pane label="注意事项">
               <!-- <ArtileList :list="wringList"/> -->
                <p>注意事项:{{listdata.precautions}}</p>
                <p>禁忌:{{listdata.taboo}}</p>
                <p>不良反应:{{listdata.adverse_reaction}}</p>
                <p>药物相互作用:{{listdata.interactions}}</p>
            </tab-pane>
            <tab-pane label="用法用量">
               <!-- <ArtileList :list="listdata.dosage"/> -->
                <p>{{listdata.dosage}}</p>
            </tab-pane>
        </tabs>
    </div>
</template>

<script>
import {Tabs, TabPane} from '@/components/tabbar/index.js'
// import ArtileList from '@/components/artileList'

export default {
  components: {
    Tabs,
    TabPane
    // ArtileList
  },
  data () {
    return {
      listdata: [],
      wringList: [],
      baseList: [
        'dd'
      ],
      active: 0
    }
  },
  created () {
    this.getmedicineDetailList()
  },
  methods: {
    getmedicineDetailList () {
      this.$api.medicine.detail({
        medicine_id: this.$route.params.id
      }).then((data) => {
        this.listdata = data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
    p{
        margin: 15px 0;
        font-size: 15px;
        padding: 0 10px;
        box-sizing: border-box;
    }
}
.header{
    width: 100%;
    display: flex;
    height: 180px;
    .left{
        width: 100px;
        background: #ddd;
        margin: 20px 10px;
    }
    .right{
         flex: 1;
         p{
             margin: 15px 0;
             font-size: 15px;
         }
         p:nth-child(2){
             font-size: 12px;
         }
    }
}
.bordercolor{
    width: 52px;
    height: 20px;
    border:1px solid red;
    border-radius:10px;
    text-align: center;
}
</style>
