import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import { config } from '../statics/config/index.js'
import store from '../store/index.js'

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

router.afterEach((to, from) => {
  config.menus.forEach(menu => {
    menu.children.forEach(child => {
      if (child.path === to.name) {
        const breadcrumb = [menu, child]
        store.commit('pageState/setBreadcrumb', breadcrumb)
      }
    })
  })
})

export default router
