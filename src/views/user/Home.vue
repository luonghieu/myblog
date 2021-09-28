<template>
  <div class="banner-wrap">
    <div class="banner"> <img src="@Assets/images/banner1.jpg" alt="banner" /> </div>
  </div>
  <!---banner--->
  <div class="page-wrap">
    <div class="wrap">
      <GridList :data="posts" v-slot="{ item }" @paginate="getPosts($event)">
        <div class="panel">
          <div class="title">
            <h1>{{ item.title }}</h1>
            <h2>{{ item.summary }}</h2>
          </div>
          <div class="content">
            <p>{{ item.content }}</p>
            <div class="button">
              <router-link :to="{ name: 'post.detail', params: { postId: item.id } }">More</router-link>
            </div>
          </div>
        </div>
      </GridList>
<!--      <Pagination @changePage="getPosts($event)" :pagination="pagination"/>-->
    </div>
    <!---wrap-end--->
    <div class="panel">
      <div class="title">
        <h1>Lorem ipsum dolor sit amet, consectetur adip isonsequat </h1>
        <h2>Nulla elit est, commodo id ultrices et, sollicitudin a odioras tortor ante, placerat at posuer</h2>
      </div>
      <div class="content"> <img src="@Assets/images/image1.jpg" alt="" />
        <p>Mnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.<br />
          <br />
        </p>
        <p>Eque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam. </p>
        <div class="button floatLeft"><a href="#">More</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Pagination from '@Components/list/Pagination'
import GridList from '@Components/list/GridList'

import '@Assets/css/styles.css'
import '@Assets/css/superfish.css'
import '@Assets/js/jquery-1.9.0.min.js'
import '@Assets/js/hoverIntent.js'
import '@Assets/js/superfish.js'

export default {
  components: {
    GridList,
    Pagination
  },
  data () {
    return {
    }
  },
  async created () {
    await this.getPosts()
  },

  computed: {
    ...mapState('post', ['posts']),
  },

  methods: {
    ...mapActions({
      getPosts: 'post/getPosts',
    }),
  },
}
</script>

<style scoped>

</style>
