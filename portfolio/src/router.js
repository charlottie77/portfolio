import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Case1 from './components/AICourse.vue'
import Case2 from './components/Robi.vue'
import About from './views/About'
import Construction from './views/Construction.vue'
import Robi from './views/Robi'

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
      path: '/1-case',
      name: 'case1',
      component: Case1
    },
    {
      path: '/2-case',
      name: 'case2',
      component: Case2
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
