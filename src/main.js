import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "./store";
import ElementUI from "element-ui";
import axios from "axios";
import VueAxios from "vue-axios";
import $ from "jquery";

Vue.prototype.$http = axios;
Vue.prototype.$URL = process.env.VUE_APP_URL;
console.log(process.env.VUE_APP_URL);

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
