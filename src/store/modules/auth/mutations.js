import { setToken, setRole, deleteToken } from '@Utils/storage'
import { ROLE_LOGIN_TYPE } from '@Config/constants'

export default {
  LOGIN_SUCCESS (state, payload) {
    setToken(payload)
    setRole(ROLE_LOGIN_TYPE.USER)
  },

  LOGOUT_SUCCESS (state) {
    deleteToken()
  }
}
