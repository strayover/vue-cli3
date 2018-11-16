import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login/login.vue";  // 登录
import HomePage from "@/components/HomePage.vue";  // 主页
import navRouter from '@/router/navRouter'         //子路由

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/HomePage",
      name: "HomePage",
      component:HomePage,
      meta:{auth:true},
      children:navRouter
    }
  ]
});
