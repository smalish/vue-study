import Vue from 'vue'
import toast from './plugins/toast/index'
import modal from './plugins/modal/index'
import loading from './plugins/loading/loading'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'
import qs from 'qs'

Vue.config.productionTip = false

// Vue.use(require('./plugins/toast/toast.js'))
Vue.use(toast)
Vue.use(modal)
Vue.use(loading)
// Vue.prototype.$axios = axios
Vue.use(vueaxios, axios)
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
