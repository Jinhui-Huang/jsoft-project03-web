import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jsCookie from 'js-cookie'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$cookie = jsCookie

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
