import CategoryRequest from '@Api/Request/user/CategoryRequest'

export default {
  async getCategories ({ commit }) {
    try {
      const { data } = await CategoryRequest.getListCategories()
      commit('SET_CATEGORIES', data)
    } catch (e) {
      throw e
    }
  },

  async getCategoryById ({ commit }, catId) {
    try {
      const { data } = await CategoryRequest.getCategoryById(catId)
      commit('SET_CATEGORY', data)
    } catch (e) {
      throw e
    }
  },
}
