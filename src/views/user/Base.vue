<template>
  <!---header-wrap--->
  <Header/>
  <!---content--->
  <router-view/>
  <!---page-wrap-end--->
  <Footer/>
</template>

<script>

import '@Assets/css/styles.css'
import '@Assets/css/superfish.css'
import '@Assets/js/jquery-1.9.0.min.js'
import '@Assets/js/hoverIntent.js'
import '@Assets/js/superfish.js'

import Header from '@Views/layout/Header'
import Footer from '@Views/layout/Footer'
import Contact from '@Views/user/Contact'

export default {
  components: {
    Header,
    Footer,
    Contact
  }
}
</script>

<style scoped>
</style>
