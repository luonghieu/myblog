<template>
  <div class="page">
    <div class="panel">
      <div class="title">
        <h1>Pages</h1>
        <h2>{{ currentPost.title }}</h2>
      </div>
      <div class="content">
        <p>{{ currentPost.content }}</p>
      </div>
    </div>
  </div>
  <!---page-wrap-end--->
</template>
<script>

import {mapActions, mapState} from "vuex";

export default {
  name: 'Pages',

  async created () {
    let route = this.$route.params;
    await this.getPostById(route.postId)
  },

  computed: {
    ...mapState('post', ['currentPost']),
  },

  methods: {
    ...mapActions({
      getPostById: 'post/getPostById',
    }),
  },
}
</script>

<style scoped>

</style>
