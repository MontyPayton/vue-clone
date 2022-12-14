import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";
import store from './store'
import 'material-design-icons-iconfont'
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
