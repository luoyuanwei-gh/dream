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
  },
  {
    path: '/vision',
    name: 'vision',
    component: () => import('../views/Vision.vue')
  },
  {
    path: '/responsive',
    name: 'responsive',
    component: () => import('../views/Responsive.vue')
  },
  {
    path: '/publishArticle',
    name: 'publishArticle',
    component: () => import('../views/admin/PublishArticle.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  let isHome = true
  config.menus.forEach(menu => {
    menu.children.forEach(child => {
      if (child.path === to.path) {
        isHome = false
        const breadcrumb = [menu, child]
        store.commit('pageState/setBreadcrumb', breadcrumb)
      }
    })
  })
  if (isHome) {
    store.commit('pageState/setBreadcrumb', [])
  }
})

export default router
