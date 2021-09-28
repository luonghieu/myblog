<template>
  <van-grid :column-num="1" class="top-page">
    <van-grid-item :style="{borderBottom: 0}">
      <van-image :src="logo"/>
    </van-grid-item>
  </van-grid>
</template>
<script>
import Logo from '@Assets/images/app_icons/expansion.png'
import { ROLE_LOGIN_TYPE } from '@Config/constants'
import { getToken, getRole } from '@Utils/storage'

export default {
  data() {
    return {
      logo: Logo
    }
  },

  created() {
    this.checkRedirect()
  },

  methods: {
    checkRedirect () {
      if (getToken()) {
        this.redirectWithCookie()
      } else {
        this.redirectToLogin()
      }
    },

    redirectWithCookie() {
      const role = getRole()

      if (role === ROLE_LOGIN_TYPE.USER) {
        this.$router.push({ name: 'user.home' })
      } else if (role === ROLE_LOGIN_TYPE.ADMIN) {
        this.$router.push({ name: 'admin.home' })
      }
    },

    redirectToLogin () {
      this.$router.push({ name: 'auth.login' })
    }
  }
}
</script>

<style lang="scss">
.top-page {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;

  .van-grid-item__content::after {
    border-bottom: 0;
  }
}
</style>
