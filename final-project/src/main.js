import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' 
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://day-trader-vuejs.firebaseio.com/'

Vue.use(VueRouter)

Vue.filter('currency', (value) => {
  return '$ ' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})
