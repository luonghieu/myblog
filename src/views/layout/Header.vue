<template>
  <div class="header-wrap">
    <div class="logo">
      <h1>Sitename</h1>
    </div>
    <div class="menu"> <img src="@Assets/images/menu-left.png" alt="image"/>
      <ul class="sf-menu" id="example">
        <li @click="currentMenu = 'user.home'" :class="{ current: currentMenu === 'user.home' }">
          <router-link :to="{name: 'user.home'}">Home</router-link>
        </li>
        <li @click="currentMenu = 'user.about'" :class="{ current: currentMenu === 'user.about' }">
          <router-link :to="{name: 'user.about'}">About</router-link>
        </li>
        <li @click="currentMenu = 'user.works'" :class="{ current: currentMenu === 'user.works' }">
          <router-link :to="{name: 'user.works'}">Works </router-link>
        </li>
        <li @click="currentMenu = 'user.pages'" :class="{ current: currentMenu === 'user.pages' }">
          <router-link :to="{name: 'user.pages'}">Pages </router-link>
          <ul>
            <li> <a href="#">consectetuer </a> </li>
            <li class="current"> <a href="#">Nunc dignissim risus id metus.</a>
              <ul>
                <li class="current"><a href="#">Cras ornare tristique elit</a></li>
                <li><router-link to="#">Ut aliquam sollicitudin leo</router-link></li>
                <li><router-link to="#">Cras iaculis ultricies nulla.</router-link></li>
                <li><router-link to="#">Aliquam tincidunt </router-link></li>
                <li><router-link to="#">vestibulum nulla nec ante</router-link></li>
              </ul>
            </li>
            <li> <router-link to="#">Cras iaculis ultricies nulla</router-link></li>
            <li> <router-link to="#">Donec quis dui at</router-link></li>
          </ul>
        </li>
        <li @click="currentMenu = 'user.contact'" :class="{ current: currentMenu === 'user.contact' }">
          <router-link :to="{name: 'user.contact'}">Contact</router-link>
        </li>
      </ul>
      <img src="@Assets/images/menu-right.png" alt="image"/> </div>
  </div>
  <div class="clear"></div>
  <!---header-wrap--->
</template>
<script>
export default {
  data () {
    return {
      currentMenu: 'user.home'
    }
  },
  computed: {
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
