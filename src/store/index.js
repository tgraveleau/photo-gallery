import Vue from 'vue'
import Vuex from 'vuex'
import sidenav from './modules/sidenav'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    sidenav
  },
  strict: debug,
})