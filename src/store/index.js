import { createApp } from 'vue'
import { createStore } from 'vuex'
import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules,
  strict: debug
})

createApp({ /* your root component */ }).use(store)

export default store
