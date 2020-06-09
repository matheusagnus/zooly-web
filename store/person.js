import https from '@/network/https'

export const state = () => ({
  url: https.baseUrl
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  }
}

export const actions = {
  async getPersons ({ state, commit }) {
    console.log(`${state.url}/users`)
    try {
      await this.$axios.get(`${state.url}/users`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        console.log(res)
      })
    } catch (err) {
      throw err
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
  }
}