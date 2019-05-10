<template>
<a href="javascript:;" class="list-item" @click="gotopage">
 <div>
    <div class="slot-left">
      <slot name="left"></slot>
    </div>
    <div class="left">
      <div>
        <span class="item-title" v-if="title">
          {{title}}
          <slot name="title"></slot>
        </span>
        <span class="item-sub-title" v-if="title">
          {{subTitle}}
          <slot name="sub-title"></slot>
        </span>
      </div>
      <p v-if="desc">{{desc}}</p>
    </div>
    <div class="right">
      <slot name="right"></slot>
      <span></span>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    linkUrl: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    gotopage () {
      // 文章详情
      console.log(this.linkUrl)
      if (this.linkUrl.indexOf('http') === 0) {
        window.location.href = this.linkUrl
        return
      }
      if (this.linkUrl) {
        this.$router.push(this.linkUrl)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  @include wh(100%, auto);
  padding: 10px;
  background: #fff;
  & > div {
    @include wh(100%, auto);
    @include flex();
    overflow: hidden;
    justify-content: space-between;
    align-items: inherit;
    .left {
      flex: 1;
      @include flex(column);
      justify-content: space-between;
      align-items: inherit;
      .item-title {
        line-height: 1.5;
        //font-size: $font-size-m;
        color: #2d2d2d;
      }
      .item-sub-title {
        //@include line-ellipsis(2);
        line-height: 1.5;
        //font-size: $font-size-s;
        color: #848484;
        margin-top: 5px;
      }
      p {
       //@include line-ellipsis(2);
        line-height: 1.5;
        //font-size: $font-size-s;
        color: #848484;
        margin-top: 5px;
      }
    }
  }
}
</style>
