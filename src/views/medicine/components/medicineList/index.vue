<template>
    <ul class="datalist">
        <!-- <li v-for="(item,index) in list" :key="index" @click="">
            <div class="left">
              <p>
                  <img :src="item.picture">
              </p>
            </div>
            <div class="top">
              <div class="wrap">
                  <h3 v-if="item.is_otc">
                    {{item[titleName]}}
                    <span>{{item.is_otc=='是'?'OTC':''}}</span>
                  </h3>
                   <h4>
                     {{item[contentName]}}
                   </h4>
              </div>
            </div>
        </li> -->
    </ul>
</template>
<script>
export default {
  props: {
    // is_otc: false,
    // list: {
    //   type: Array,
    //   default: () => []
    // },
    // titleName: {
    //   type: String,
    //   default: 'medicine_name'
    // },
    // contentName: {
    //   type: String,
    //   default: 'specification'
    // }

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
    // goDetail (id) {
    //   console.log(id, 'iddd')
    //   this.$router.push({
    //     path: '/active/medicineDetial/' + id
    //   })
    // }
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
  background: #fff;
  flex-direction: column;
  margin-top: 10px;
  li {
    width: 100%;
    display: flex;
    height: 80px;
    border-bottom:1px solid #dddddd;
   .left {
      width: 25%;
      background: paleturquoise;
      border: 1px solid #dddddd; padding: 20px 0;
      box-sizing: border-box;
      margin: 10px 10px;
      p{
        width:80px;
      }
    }
    .top {
      width: 100%;
      display: flex;
      line-height:30px;
      flex-direction: column;
      overflow: hidden;
      flex: 1;
      justify-content: space-between;
      .wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        h3 {
        color: #5B5A61;
        font-size: 13px;
        }
        h4{
          color: #000;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
