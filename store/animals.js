import https from '@/network/https'


export const state = () => ({
  url: https.baseUrl,
  animalsData: []
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  setAnimals: (state, payload) => {
    state.animalsData = payload
  }
}

export const actions = {
  async getAnimals({ state, commit }) {
    try {
      await this.$axios.get(`${state.url}/animal`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setAnimals', res.data)
      })
    } catch (err) {
      throw err
    }
  }
}