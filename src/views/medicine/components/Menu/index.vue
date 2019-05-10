<template>
    <div class="navlist">
      <dl v-for="(item,index) in navlist" :key="index" @click="changeList(index)">
          <dt>
              <img class="img" :src="index===defaultimg?item.activeimg:item.img">
              <p class="fontsize">{{item.title}}</p>
          </dt>
      </dl>
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
      defaultimg: 0,
      navlist: [
        {
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/fr.png',
          title: '发热感冒药',
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/fr-active.png'
        },
        {
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/gm-active.png',
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/gm.png',
          title: '过敏药'
        },
        {
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/cw-active.png',
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/cw.png',
          title: '肠胃药'
        },
        {
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/ks-active.png',
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/ks.png',
          title: '咳嗽药'
        },
        {
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/yy-active.png',
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/yy.png',
          title: '营养药'
        },
        {
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/wy.png',
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/wy-active.png',
          title: '外用药'
        },
        {
          activeimg: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/qt-active.png',
          img: 'http://qx.dev.iluckybao.com/assets/mobile/img/drugs/qt.png',
          title: '其他药物'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    // 子传父 写一个自定义事件 把下标和点击的文字传过去
    changeList (index) {
      this.defaultimg = index
      this.$emit('changeList', index, this.navlist[index].title)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.navlist{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    background: #fff;
}
.navlist dl {
    width:22%;
    display:flex;
    dt img{
      width:60px;
      height:60px;
    }
    font-size: 12px;
    text-align: center;
}
</style>
