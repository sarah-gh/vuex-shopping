import Vue from 'vue'
import Vuex from 'vuex'

// import module
import foodInfo from './modules/food-info'
import * as getters from './getters-store'
import * as mutations from './mutations-store'
import * as actions from './actions-store'
import * as state from './state-store'
import shopInfo from './modules/shop-info'


Vue.use(Vuex)

export const store = new Vuex.Store({
  
  state,
  getters,
  mutations,
  actions,

  modules: {
    foodInfo,
    shopInfo
  }
})
