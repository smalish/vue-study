import Vue from 'vue'
import Bus from './plugins/vue-bus'
import Toast from './plugins/toast/toast.js'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Bus)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
