import axios from 'axios'
import { isEmpty } from 'lodash'
import { getToken, deleteToken, deleteRole } from '@Utils/storage'
import { push } from '@Router'
import NProgress from 'nprogress'

axios.interceptors.request.use(
  (config) => {
    const accessToken = getToken()

    if (!isEmpty(accessToken)) {
      const headers = {
        Authorization: `Bearer ${accessToken}`
      }

      config.headers = Object.assign(config.headers, headers)
    }

    NProgress.start();

    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data
  },
  (error) => {
    console.log(11111111111111)
    console.log(error)
    const statusCode = error.response && error.response.status
    switch (statusCode) {
      case 401:
        deleteToken()
        deleteRole()
        push('/')
        break
      case 403:
        break
      case 404:
        push('/404')
        break
      case 500:
        break
      default:
        break
    }

    return Promise.reject(error.response && error.response.message)
  })
