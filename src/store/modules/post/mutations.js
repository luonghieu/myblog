export default {
  SET_LIST_POSTS (state, payload) {
    state.posts = payload
  },

  SET_POST (state, payload) {
    state.currentPost = payload
  },
}
