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
      },
      {
        path: '/clock',
        name: 'Clock',
        meta: {
          title: '91官网 - 打卡'
        },
        component: () => import(/* webpackChunkName: "Clock" */ '../views/Clock.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: "history",
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title || '91website'
})

export default router
