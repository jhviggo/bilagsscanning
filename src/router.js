import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import kontakt from './views/kontakt-os/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/kontakt-os',
      name: 'kontakt_os',
      component: kontakt
    }
  ]
})
