import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    getDataList(state, data) {
      state.data = data
    },
  },
  actions: {
    async getAxiosData({ commit }) {
      const res = await axios.get('/api/list')
      if (res.data.code === 200) {
        commit('getDataList', res.data.data)
      }
    },
  },
  modules: {},
})
