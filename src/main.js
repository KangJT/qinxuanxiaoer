// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import icons from './plugins/icons'
import api from './api'
import changeAll from './plugins'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(icons)
Vue.use(api)
Vue.use(changeAll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
