<template>
  <div>
      <div>
        {{list}}
         <span class="span">今日已签到</span>
         <div>
              <h1>你已经连续签到<b>01</b>天</h1>
              <h4>明日签到可获得<b>2</b>积分</h4>
              <p>
                <span>+1</span>
                <span>+2</span>
                <span>+3</span>
                <span>+4</span>
                <span>+5</span>
                <span>+6</span>
                <span>+10</span>
              </p>
              <div>
                <h2>签到规则</h2>
                <p>ssssss</p>
              </div>
         </div>
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
      total_day: '03', // 总共几天
      tomorrow_integral: '4', // 明日积分
      list: [],
      is_submit: '01'
    }
  },
  computed: {

  },
  methods: {
    changeDataList () {
      this.$api.changecard.changeEveryData((data) => {
        console.log(data, 'aaa')
      })
    },
    getInfo () {
      this.$api.changecard.changDataInfo((data) => {
        console.log(data, 'ss', data.list)
        // this.list = data.list
      })
    }
  },
  created () {
    this.changeDataList()
    this.getInfo()
  },
  mounted () {
  }
}
</script>
<style scoped lang="">

</style>
