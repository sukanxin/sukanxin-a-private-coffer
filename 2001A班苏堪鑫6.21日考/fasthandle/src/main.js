import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Tabbar, TabbarItem } from 'vant'
import { Lazyload } from 'vant'
import { Icon } from 'vant'

Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
