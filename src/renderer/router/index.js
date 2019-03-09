import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/Home').default
    },
    {
      path: '/create',
      name: 'create-page',
      component: require('@/views/Create').default
    },
    {
      path: '/article',
      name: 'article-page',
      component: require('@/views/Article').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
