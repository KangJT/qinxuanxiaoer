<template>
  <div class="menu">
    <nav>
      <router-link v-for="(item,index) in menu" :key="index" :to="item.path">
        <b><img :src="item.icon" /></b>
        <span>{{item.title}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          icon: require('@/assets/img/icon_03.png'),
          title: '儿童药箱',
          path: '/medicine'
        },
        {
          icon: require('@/assets/img/icon_06.png'),
          title: '附近药店',
          path: '/medicine'
        },
        {
          icon: require('@/assets/img/icon_10.png'),
          title: '智能医生',
          path: '/medicine'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.menu {
  background: #fff;
  padding: 20px 0;
  margin-bottom: 10px;
  nav {
    @include wh(100%, auto);
    display: flex;
    a {
      flex: 1;
      @include flex(column);
      font-size: 12px;
      line-height: 2;
      color: #333;
      b {
        @include wh(58px, 58px);
        @include flex();
        border-radius: 100%;
        img {
          @include wh(50%, auto);
        }
      }
      &:nth-child(1) b{
        background-image: linear-gradient(#FFA83B, #FFBC2F);
      }
      &:nth-child(2) b{
        background-image: linear-gradient(#BA56EA, #CD62E3);
      }
      &:nth-child(3) b{
        background-image: linear-gradient(#FF5866, #FF6992);
      }
    }
  }
}
</style>
