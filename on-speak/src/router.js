import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Callback from '@/components/Callback';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/CompleteReg',
      name: 'CompleteReg',
      component: () => import('./views/CompleteReg.vue'),
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue')
    },
    {
      path: '/mediacontent',
      name: 'mediacontent',
      component: () => import( './views/CreateMediaContent.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import( './views/Search.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import( './views/Profile.vue')
    },
    {
      path: '/callback',
      component: Callback,
    },
  ]
})