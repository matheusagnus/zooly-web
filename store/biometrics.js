import https from '@/network/https'
import Swal from 'sweetalert2'

export const state = () => ({
  url: https.baseUrl,
  biometricsData: []
})

export const mutations = {
  setBiometrics: (state, payload) => {
    state.biometricsData = payload
  }
}

export const actions = {
  async getAllBiometry({ state, commit }) {
    try {
      await this.$axios.get(`${state.url}/biometry`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setBiometrics', res.data)
      })
    } catch (err) {
      throw err
    }
  },
  async createBiometry({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.post(`${state.url}/biometry`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAllBiometry')
        dispatch('getAnimals', { root: true })
        Swal.fire({
          title: 'Biometria Criada!',
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
  },
  async deleteBiometric ({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.delete(`${state.url}/biometry/${payload}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAllBiometry')
        dispatch('getAnimals', { root: true })
        Swal.fire({
          title: 'Biometria Deletada!',
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