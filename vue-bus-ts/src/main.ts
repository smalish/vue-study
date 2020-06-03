import Vue from 'vue'
import toast from './plugins/toast/index'
import modal from './plugins/modal/index'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(require('./plugins/toast/toast.js'))
Vue.use(toast)
Vue.use(modal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
