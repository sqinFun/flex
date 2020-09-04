import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

import menu from './modules/menu'
import catalogMenu from './modules/catalogMenu'
import product from './modules/product'
import userData from './modules/userData'

Vue.use(Vuex)
Vue.use(Vuelidate)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    catalogMenu,
    product,
    userData
  }
})
