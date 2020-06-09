import https from '@/network/https'

export const state = () => ({
  url: https.baseUrl,
  dataPerson: [],
  isLoading: false
})

export const mutations = {
  setLoading: (state) => {
    state.isLoading = !state.isLoading
  },
  setPersons: (state, payload) => {
    console.log(payload)
    state.dataPerson = payload
  }
}

export const actions = {
  async getPersons ({ state, commit }) {
    commit('setLoading')
    try {
      await this.$axios.get(`${state.url}/users`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setPersons', res.data)
        return res.data
      })
    } catch (err) {
      throw err
    } finally { 
      commit('setLoading')
    }
  },
  async editPerson ({ state, commit }, payload) {
    commit('setLoading')
    try {
      await this.$axios.put(`${state.url}/users`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        console.log(res)
      })
    } catch (err) {
      throw err
    } finally { 
      commit('setLoading')
    }
  },
  async createPerson({ state, commit }, payload) {
    try {
      await this.$axios.get(`${state.url}/users`, payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        console.log(res)
      })
    } catch (err) {
      throw err
    }
  },
  async deletePerson ({ state, commit }, payload) {
    commit('setLoading')
    try {
      await this.$axios.get(`${state.url}/users/${payload.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        console.log('res')
      })
    } catch (err) {
      throw err
    } finally { 
      commit('setLoading')
    }
  },
}