import { createApp } from 'vue'
import App from '@Views/App'
import store from '@Store'
import router from '@Router'
import i18n from './i18n'
import Vant from 'vant'
import Antd from 'ant-design-vue'
//CSS ant file needs to be imported separately
import 'ant-design-vue/dist/antd.css'
import 'vant/lib/index.css'
const cors = require('cors')

const app = createApp(App).use(i18n)

class Main {
  static baseConfig = () => {
    app.config.productionTip = false
  }

  static renderApp = () => {
    // app.use(
    //   cors({
    //     // origin: (origin, callback) => callback(null, true), // you can control it based on condition.
    //     credentials: true, // if using cookie sessions.
    //   })
    // )
    app.use(Antd)
    app.use(Vant)
    app.use(router)
    app.use(store)
    app.use(i18n)
    app.mount('#app')
  }

  static run () {
    Main.baseConfig()
    Main.renderApp()
  }
}

Main.run()
