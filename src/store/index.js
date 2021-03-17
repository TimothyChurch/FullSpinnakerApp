import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
})
