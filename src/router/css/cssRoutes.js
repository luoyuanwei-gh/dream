const cssRoutes = [
  {
    path: '/cssIntroduce',
    name: 'cssIntroduce',
    component: () => import('../../views/css/Index.vue')
  },
  {
    path: '/css_demo',
    name: 'css_demo',
    component: () => import('../../views/css/Demo.vue')
  }
]

export default cssRoutes
