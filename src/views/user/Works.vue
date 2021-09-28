<template>
  <div class="page">
    <div class="panel">
      <div class="title">
        <h1>works</h1>
        <h2>works</h2>
      </div>
      <div class="portfolio-content">
        <ButtonDropDown
          class="portfolio-categ filter"
          :data="categories"
          @select="selectCategory"
        >
          <template v-slot:title>
            <span>Categories</span>
          </template>
          <template v-slot:current>
            <span>{{ currentCategory.title }}</span>
          </template>
        </ButtonDropDown>
        <div class="portfolio-area page-wrap wrap">
          <GridList :data="posts" v-slot="{ item }" @paginate="listPostsByCatId">
              <div>
              <span class="portfolio-item2 image-block" data-type="cat-item-4">
                <router-link class="image-zoom" :to="{ name: 'post.detail', params: { postId: item.id } }">
                  <img width="190" height="130" :src="item.images" :alt="item.title" :title="item.title" />
                </router-link>
              </span>
                <div class="home-portfolio-text">
                  <h2 class="post-title-portfolio">
                    <router-link :to="{ name: 'post.detail', params: { postId: item.id } }">{{ item.title }}</router-link>
                  </h2>
                </div>
              </div>
            <div class="column-clear"></div>
          </GridList>
        </div>
        <!--end portfolio-area -->
      </div>

    </div>
  </div>
  <!---page-wrap-end--->
</template>
<script>
import {mapActions, mapState} from "vuex";
import ButtonDropDown from "@Components/dropdown/ButtonDropDown";
import GridList from "@Components/list/GridList";

export default {
  name: 'Works',
  components: {
    ButtonDropDown,
    GridList
  },
  data () {
    return {
    }
  },
  async created () {
    await this.getCategories()
  },

  computed: {
    ...mapState('category', ['categories', 'currentCategory']),
    ...mapState('post', ['posts']),
  },

  methods: {
    async selectCategory (cat_id) {
      await this.getCategoryById(cat_id)
      await this.getPostsByCatId({ catId: this.currentCategory.id })
    },

    async listPostsByCatId (page, per_page) {
      await this.getPostsByCatId({ catId: this.currentCategory.id, page: page, per_page: per_page })
    },

    ...mapActions({
      getCategories: 'category/getCategories',
      getCategoryById: 'category/getCategoryById',
      getPostsByCatId: 'post/getPostsByCatId',
    })
  },
}
</script>

<style scoped>

</style>
