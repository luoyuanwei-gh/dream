const articleRoutes = [
  {
    path: '/article',
    name: 'article',
    component: () => import('../../views/article/Index.vue')
  }
]

export default articleRoutes
