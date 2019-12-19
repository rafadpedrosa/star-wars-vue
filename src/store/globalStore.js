import Vue from 'vue'
import Vuex from 'vuex'

import peopleStore from './modules/peopleStore.js'
import filmsStore from './modules/filmsStore.js'
import planetsStore from './modules/planetsStore.js'
import speciesStore from './modules/speciesStore.js'
import vehiclesStore from './modules/vehiclesStore.js'
// import starshipStore from './modules/starshipStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    peopleStore,
    filmsStore,
    planetsStore,
    speciesStore,
    vehiclesStore
    // starshipStore
  },
  state: {
    init: false
  },
  mutations: {
    INITIALIZED (state, { init }) {
      state.init = init
    }
  },
  actions: {},
  getters: {
    initialized: state => state.init
  }
})
