import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rankings from '../views/Rankings/Rankings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/', redirect: { name: 'Basic' } },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/basic',
        name: 'Basic',
        component: () => import('../views/basic/BasicList.vue')
      },
      {
        path: '/basicDetail',
        name: 'BasicDetail',
        component: () => import('../views/basic/BasicDetail.vue')
      },
      {
        path: '/Rankings',
        name: 'Rankings',
        component: () => import('../views/Rankings/Rankings.vue')
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
