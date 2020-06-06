import { underLoadingFunction } from './helpers/under-loading'
import https from '@/network/https'

export const state = () => ({
  url: https.baseUrl,
  token: null,
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  setToken: (state, payload) => {
    state.token = payload
  }
}

export const actions = {
  async doLogin ({ state, commit, dispatch }, payload) {
    try {
      dispatch('loading/changeLoadingState', true, {root: true})
      await this.$axios.post(`${state.url}/authenticate`, payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        commit('setToken', res.data)
        this.$router.push({
          path: '/'
        }) 
      })
    } catch (err) {
      throw err
    } finally {
      dispatch('loading/changeLoadingState', false, {root: true})
    }
  }
}