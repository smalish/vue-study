import Vue from 'vue'
import App from './App.vue'
import router from '@/router/about.js'
import axios from '@/axios/about.js'
import toast from '@/components/Toast/toast.js'
import loading from '@/components/Loading/loading.js'


Vue.config.productionTip = false
Vue.use(toast)
Vue.use(loading)
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
