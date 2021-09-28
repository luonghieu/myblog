import PostRequest from '@Api/Request/user/PostRequest'

export default {
  async getPosts ({ commit }, page, per_page) {
    try {
      const { data } = await PostRequest.getListPosts(page, per_page)
      commit('SET_LIST_POSTS', data)
    } catch (e) {
      throw e
    }
  },

  async getPostById ({ commit }, postId) {
    try {
      const { data } = await PostRequest.getPostById(postId)
      commit('SET_POST', data)
    } catch (e) {
      throw e
    }
  },

  async getPostsByCatId ({ commit }, params ) {
    try {
      const { data } = await PostRequest.getPostsByCatId(params.catId, params.page, params.per_page)
      commit('SET_LIST_POSTS', data)
    } catch (e) {
      throw e
    }
  }
}
