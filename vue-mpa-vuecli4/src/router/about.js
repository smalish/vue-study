import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/views/about/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/page1',
    name: 'Page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page1" */ '../views/about/pages/page1.vue')
  },{
    path: '/page2',
    name: 'Page2',
    component: () => import(/* webpackChunkName: "page2" */ '@/views/about/pages/page2.vue')
  },{
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router