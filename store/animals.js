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
  async getAnimals({ commit }) {
    try {
      await this.$axios.get(`${state.url}/animals`, {
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