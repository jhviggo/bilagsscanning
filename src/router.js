import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import kontakt from './views/kontakt-os/index.vue';
import om_os from './views/om-os/index.vue';
import faq from './views/FAQ/index.vue';
import produktet from './views/produktet/index.vue';

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
    },
    {
      path: '/om-os',
      name: 'om_os',
      component: om_os
    },
    {
      path: '/FAQ',
      name: 'faq',
      component: faq
    },
    {
      path: '/produktet',
      name: 'produktet,',
      component: produktet
    }
  ]
})
