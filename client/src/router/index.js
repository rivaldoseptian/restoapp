import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Home from '../views/home.vue'

import FoodOrder from '../views/formOrder.vue'
import Keranjang from '../views/listKeranjang.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/food/order/:id',
    name: 'foodOrder',
    component: FoodOrder
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/Keranjang',
    name: 'Keranjang',
    component: Keranjang
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'foodOrder' && !localStorage.access_token) {
    next({ name: 'login' })
  } else if (to.name === 'Keranjang' && !localStorage.access_token) {
    next({ name: 'login' })
  } else if (to.name === 'login' && localStorage.access_token) {
    next({ name: 'home' })
  } else if (to.name === 'register' && localStorage.access_token) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
