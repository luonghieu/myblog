import AuthRequest from '@Api/Request/AuthRequest'

export default {
  async login ({ commit }, payload) {
    try {
      const { access_token } = await AuthRequest.login(payload)
      commit('LOGIN_SUCCESS', access_token)
    } catch (e) {
      // TODO.
    }
  },
}
