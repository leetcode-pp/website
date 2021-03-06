import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/basic',
        name: 'Basic',
        component: () => import(/* webpackChunkName: "BasicList" */ '../views/basic/BasicList.vue')
      },
      {
        path: '/basicDetail',
        name: 'BasicDetail',
        component: () => import(/* webpackChunkName: "BasicDetail" */ '../views/basic/BasicDetail.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
