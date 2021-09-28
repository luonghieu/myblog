const API_URL = process.env.VUE_APP_BASE_API_URL || 'http://localhost'
const BASE_URL = process.env.VUE_APP_MAIN_URL || 'http://localhost'
const STORAGE_URL = process.env.VUE_APP_STORAGE_URL || 'https://minio.app.test'

const TIME_ZONE = process.env.VUE_APP_TIME_ZONE || 'Asia/Tokyo'

const DEFAULT_LANGUAGE = 'ja'

const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

// storage
const STORAGE = {
  TOKEN: 'token',
  ROLE: 'role',
  HAS_LOGIN: 'has_login'
}

const ROLE_LOGIN_TYPE = {
  ADMIN: '1',
  USER: '2'
}

export {
  API_URL,
  BASE_URL,
  STORAGE_URL,

  // Timezone
  TIME_ZONE,

  // Types
  DEFAULT_LANGUAGE,

  REQUEST_HEADER,

  ROLE_LOGIN_TYPE,

  STORAGE
}
