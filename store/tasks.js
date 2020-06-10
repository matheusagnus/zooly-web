import https from '@/network/https'
import Swal from 'sweetalert2'

export const state = () => ({
  url: https.baseUrl,
  isLoading: false,
  tasksData: []
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  setLoading: (state) => {
    state.isLoading = !state.isLoading
  },
  setTask: (state, payload) => {
    state.tasks = payload
  }
}

export const actions = {
  async getAllTasks({ state, commit }) {
    try {
      commit('setLoading')
      await this.$axios.get(`${state.url}/task`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setTask', res)
      })
    } catch (err) {
      throw err
    } finally {
      commit('setLoading')
    }
  }, 
  async addNewTask ({ state, commit, dispatch }, payload) {
    try {
      await this.$axios.post(`${state.url}/task`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        dispatch('getAllTasks')
        Swal.fire({
          title: 'Tarefa Criada!',
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