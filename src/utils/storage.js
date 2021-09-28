import VueCookie from 'vue-cookies'
import { STORAGE } from '@Config/constants'

export const getToken = () => {
  return VueCookie.get(STORAGE.TOKEN)
}

export const setToken = (token) => {
  return VueCookie.set(STORAGE.TOKEN, token)
}

export const deleteToken = () => {
  return VueCookie.remove(STORAGE.TOKEN)
}

export const getRole = () => {
  return localStorage.getItem(STORAGE.ROLE)
}

export const setRole = (role) => {
  return localStorage.setItem(STORAGE.ROLE, role)
}

export const deleteRole = () => {
  return localStorage.removeItem(STORAGE.ROLE)
}
