<template>
<div class="compoent-list">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="scss" scoped>
.compoent-list {
  background: yellow;
  .list-item{
    overflow: hidden;
    background: orange;
    &:after {
      left: 10px;
    }
  }
}
</style>
