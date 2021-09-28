<template>
  <van-grid :border="false" :column-num="1" class="auth-layout">
    <van-grid-item>
      <div class="auth-logo">
        <van-image :src="logo"/>
      </div>
    </van-grid-item>
    <van-grid-item>
      <router-view/>
    </van-grid-item>
  </van-grid>
</template>
<script>
import Logo from '@Assets/images/app_icons/expansion.png'

export default {
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="scss">
.auth-layout {
  padding: 0 25px;

  .auth-logo {
    padding-top: 45px;
    padding-bottom: 75px;
  }

  .auth-title-1 {
    line-height: 33px;
    word-break: keep-all;
    font-size: 18px;
    color: #776677;
    font-weight: 500;
  }
}
</style>
