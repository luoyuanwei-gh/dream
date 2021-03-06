import cssRoutes from './css/cssRoutes.js'
import jsRoutes from './js/jsRoutes.js'
// import articleRoutes from './article/articleRoutes.js'
import networkResouce from './networkResouce/networkResouce.js'

const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }].concat(
  cssRoutes,
  jsRoutes,
  // articleRoutes,
  networkResouce
)

export default routers
