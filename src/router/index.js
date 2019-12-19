import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/People',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  },
  {
    path: '/Films',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Films.vue')
  },
  {
    path: '/Starships',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Starships.vue')
  },
  {
    path: '/Vehicles',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vehicles.vue')
  },
  {
    path: '/Species',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Species.vue')
  },
  {
    path: '/Planets',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planets.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
