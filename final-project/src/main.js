import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' 
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/store'

Vue.use(VueRouter)

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
