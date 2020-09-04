import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog/Catalog'
import Goods from '../views/Goods/Goods'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    component: Catalog,
  },
  {
    path: '/catalog/:id',
    name: 'goods',
    component: Goods,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
