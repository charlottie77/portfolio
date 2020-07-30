import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MobileHome from './views/MobileHome.vue'
import About from './views/About'
import Construction from './views/Construction.vue'
// import Robi from './views/Robi'
import Robi from './views/NewRobi'
import MobileRobi from './views/MobileRobi'
import FoodRoute from './views/FoodRoute'
import MobileFoodRoute from './views/MobileFoodRoute'

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
      path: '/m-index',
      name: 'mobile-index',
      component: MobileHome
    },
    {
      path:'/robi',
      name: 'robi',
      component: Robi
    },
    {
      path:'/m-robi',
      name: 'mobile-robi',
      component: MobileRobi
    },
    {
      path:'/food-route',
      name: 'food-route',
      component: FoodRoute
    },
    {
      path: '/m-food-route',
      name: 'mobile-food-route',
      component: MobileFoodRoute
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
