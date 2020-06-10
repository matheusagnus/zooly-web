import https from '@/network/https'
import Swal from 'sweetalert2'

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
    try {
      commit('setLoading')
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
  async editPerson ({ state, commit, dispatch }, payload) {
    commit('setLoading')
    try {
      await this.$axios.put(`${state.url}/users`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getPersons')
        Swal.fire({
          title: 'Usuário editado!',
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
    } finally { 
      commit('setLoading')
    }
  },
  async createPerson({ state, commit, dispatch }, payload) {
    commit('setLoading')
    try {
      await this.$axios.post(`${state.url}/users`, payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getPersons')
        Swal.fire({
          title: 'Usuário criado!',
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
    } finally { 
      commit('setLoading')
    }
  },
  async deletePerson ({ state, commit, dispatch }, payload) {
    commit('setLoading')
    try {
      await this.$axios.delete(`${state.url}/users/${payload.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getPersons')
        Swal.fire({
          title: 'Usuário deletado!',
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
    } finally { 
      commit('setLoading')
    }
  },
}