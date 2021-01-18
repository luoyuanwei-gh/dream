const articleRoutes = [
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../../views/article/Article.vue')
  }
]

export default articleRoutes
