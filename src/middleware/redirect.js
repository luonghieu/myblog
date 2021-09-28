import { getToken, getRole } from '@Utils/storage'
import { ROLE_LOGIN_TYPE } from '@Config/constants'

export const authRedirect = ({ next }) => {
  const isAuth = getToken()
  if (isAuth) {
    return next({ name: 'top' })
  }
  return next()
}

export const userRedirect = ({ next }) => {
  const role = getRole()
  if (role !== ROLE_LOGIN_TYPE.USER) {
    return next({ name: 'top' })
  }
  return next()
}
