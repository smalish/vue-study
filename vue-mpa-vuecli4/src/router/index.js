import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/views/index/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },{
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router