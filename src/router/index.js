import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('../layouts/IndexLayout.vue'),
    children: routers
  }
]

const router = new VueRouter({
  routes
})

export default router
