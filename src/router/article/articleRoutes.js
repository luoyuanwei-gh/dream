const articleRoutes = [
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../../views/article/Index.vue')
  }
]

export default articleRoutes
