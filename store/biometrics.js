import https from '@/network/https'
import Swal from 'sweetalert2'

export const state = () => ({
  url: https.baseUrl,
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
  }
}