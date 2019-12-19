import axios from 'axios'

export default {
  namespaced: true,
  state: {
    peopleList: []
  },
  mutations: {
    SET_PEOPLE_LIST (state, data) {
      state.peopleList = data
    }
  },
  actions: {
    fetchPeoples () {
      return axios.get('http://localhost:8888/people', {
        mode: 'no-cors'
      }).then((response) => response.data)
    }
  },
  getters: {
    peoples: state => state.peopleList
  },
  modules: {}
}
