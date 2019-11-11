import Vue from 'vue'
import 'weui'
import './assets/styles.scss'
import App from './App.vue'
import router from './routers'

Vue.config.productionTip = false

new Vue({
  //支持vue-router
  router,
  render: h => h(App),
}).$mount('#app')
