import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './plugins/element.js'
import ElementUI from "element-ui";
// import { Button, Select, Navmenu } from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import Pagination from "@/components/Pagination/index.vue";
// 全局组件挂载
Vue.component("Pagination", Pagination);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
