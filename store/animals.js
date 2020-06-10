import https from '@/network/https'
import Swal from 'sweetalert2'

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
  },
  async deleteAnimal ({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.delete(`${state.url}/animal/${payload}`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAnimals')
        Swal.fire({
          title: 'Animal deletado!',
          icon: 'success'
        })
      })
    } catch (err) {
      Swal.fire({
        title: 'Oopss..',
        text: 'Algo deu errado! Tente novamente mais tarde.',
        icon: 'error'
      })
      throw err
    }
  }
}