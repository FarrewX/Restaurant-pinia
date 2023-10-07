import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import info from '../components/info.vue'
import axios from 'axios'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/info/undefined/:id',
      name: 'info',
      component: info
    },
  ]
})

export default router
