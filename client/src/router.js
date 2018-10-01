import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/capture', name: 'capture', component: () => import('./views/Capture.vue') },
    { path: '/about', name: 'about', component: () => import('./views/About.vue')
    }
  ]
})
