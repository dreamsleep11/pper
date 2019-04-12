import Vue from 'vue'
import Vuex from 'vuex'
import kernal from './kernal/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    kernal
  }
})
