<template>
  <van-grid :column-num="1" class="page-404">
    <van-grid-item :style="{borderBottom: 0}">
      <van-image :src="img"/>
    </van-grid-item>
  </van-grid>
</template>

<script>
import img404 from '@Assets/images/404.svg'

export default {
  name: 'ExceptionPage404',
  data () {
    return {
      img: img404
    }
  }
}
</script>

<style lang="scss" scoped>
.page-404 {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;

  .van-grid-item__content::after {
    border-bottom: 0;
  }
}
</style>
