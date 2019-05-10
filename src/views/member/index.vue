<template>
  <div>
    <header class="header">
      <dl>
        <dt>
          <img
            src="http://thirdwx.qlogo.cn/mmopen/NIeuHOmnEzAWFHbPicYWRJO8gXGe22feaib79SH3Z04PBh3j4Wniccan8G87mpyvq1gOYiboZFrTGXDozjE9LoecL2YxfFzFtPW0/132"
            alt
          >
        </dt>
        <dd>
          <div class="left">
            <span>{{nickname}}</span>
            <span>
              <b>{{integral}}</b>积分
            </span>
          </div>
          <div class="right">
            <button @click="clickAddDay">签到</button>
          </div>
        </dd>
      </dl>
    </header>
    <main>
      <router-view/>
      <ul class="navlist">
        <router-link tag='li' v-for="(item,index) in clickList" :key="index" :to="item.path">
          <svg-icon
            :iconClass="item.icon +'_active'"
            :size="20"
          ></svg-icon>
          <p>{{item.name}}</p>
        </router-link >
      </ul>
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {},
  components: {},
  data () {
    return {
      info: {},
      indfvl: [],
      clickList: [
        {
          name: '孩子信息',
          icon: 'toolbox',
          path: '/childinfo'
        },
        {
          name: '积分兑换',
          icon: 'study',
          path: '/integral'
        },
        {
          name: '我的订单',
          icon: 'ask',
          path: '/myorder'
        },
        {
          name: '分享海报',
          icon: 'mine',
          path: '/drawimg'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.user.nickname,
      integral: state => state.user.integral
    })
  },
  methods: {
    ...mapActions({
      getUserInfo: 'user/getUserInfo'
    }),
    clickAddDay () {
      this.$router.push({
        path: '/everyDady'
      })
    }
  },
  created () {
    this.getUserInfo()
  },
  mounted () {}
}
</script>
<style scoped lang="scss">
.header {
  @include wh(100%, 180px);
  background: $color-base;
  dl {
    @include wh(100%, 100%);
    display: flex;
    dt {
      @include wh(80px, 80px);
      border-radius: 50%;
      margin: 30px 0 0 30px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    dd {
      display: flex;
      flex: 1;
      justify-content: space-around;
      .left {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        span {
          margin: 5px 0;
        }
      }
      .right {
        margin-top: 50px;
        button {
          @include wh(60px, 30px);
          background: 0;
          border-radius: 3px;
          border: 1px solid #dddddd;
        }
      }
    }
  }
}
main {
  width: 100%;
  flex: 1;
  .navlist {
    width: 100%;
    li {
      width: 100%;
      padding: 10px 10px;
      display: flex;
      border-bottom: 1px solid $color-text-placeholder;
      p {
        margin-left: 10px;
        font-size: 12px;
        color: $color-text-secondary;
      }
    }
  }
}
</style>
