<template>
  <footer class="footer-nav">
    <router-link
      v-for="(item,index) in homelist"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <svg-icon :iconClass="$route.path === item.path ? item.icon +'_active' :item.icon" :size="20"></svg-icon>
      <span>{{item.name}}</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  props: {},
  components: {},
  data () {
    return {
      homelist: [
        {
          name: '育儿助手',
          icon: 'toolbox',
          path: '/toolbox'
        },
        {
          name: '爸妈学医',
          icon: 'study',
          path: '/mine'
        },
        {
          name: '问医生',
          icon: 'ask',
          path: '/doctor'
        },
        {
          name: '会员中心',
          icon: 'mine',
          path: '/member'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.footer-nav {
  @include wh(100%,44px);
  @include box_flex();
  @include absolute(fixed);
  background: #fff;
  align-items: center;
  bottom: 0;
  color: #000;
  a {
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: #000;
    span{
      font-size: 12px;
      margin-top: 3px;
    }
    &.active {
      color: #ff4444;
    }
  }
}
</style>
