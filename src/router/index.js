import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "/", redirect: { name: "Basic" } },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/basic",
        name: "Basic",
        component: () =>
          import(
            /* webpackChunkName: "BasicList" */ "../views/basic/BasicList.vue"
          )
      },
      {
        path: '/Rankings',
        name: 'Rankings',
        component: () => import(/* webpackChunkName: "Rankings" */'../views/Rankings/Rankings.vue')
      },
      {
        path: "/solutionDetails",
        name: "SolutionDetails",
        component: () =>
          import(
            /* webpackChunkName: "SolutionDetails" */ "../components/SolutionDetails.vue"
          )
      }

    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
