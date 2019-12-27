import Vue from 'vue'
import Vuex from 'vuex'
import { Tabbarhide, Tabbarshow } from './type.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true
  },
  mutations: {
    [Tabbarshow] (state) {
      // console.log("show")
      state.isShow = true
    },
    [Tabbarhide] (state) {
      // console.log("hides")
      state.isShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
