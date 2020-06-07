import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Construction from './views/Construction.vue'
// import Robi from './views/Robi'
import Robi from './views/NewRobi'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path:'/robi',
      name: 'robi',
      component: Robi
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      // {
      //   path: '/',
      //   name: 'home',
      //   component: Home
      // },
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
