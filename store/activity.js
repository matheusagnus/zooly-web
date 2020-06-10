import https from '@/network/https'
import Swal from 'sweetalert2'

export const state = () => ({
  url: https.baseUrl,
  activityData: []
})

export const mutations = {
  setActivity: (state, payload) => {
    state.activityData = payload
  }
}

export const actions = {
  async getActivity({ state, commit }) {
    try {
      await this.$axios.get(`${state.url}/logs`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setActivity', res.data)
      })
    } catch (err) {
      throw err
    }
  },
  async getUserActivity({ state, commit }) {
    try {
      await this.$axios.get(`${state.url}/logs/${sessionStorage.uid}`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${sessionStorage.token}`
        } 
      }).then(res => {
        commit('setActivity', res.data)
      })
    } catch (err) {
      throw err
    }
  }
}