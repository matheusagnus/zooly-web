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
    sessionStorage.setItem('token', payload)
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
        commit('setToken', res.data.jwt)
        dispatch('user/getUser', res.data.jwt, {root: true})
        this.$router.push({
          path: '/'
        }) 
      })
    } catch (err) {
      throw err
    } finally {
      
      dispatch('loading/changeLoadingState', false, {root: true})
    }
  },
  doLogout ({ commit }) {
    commit('setToken', null)
    this.$router.push({
      path: '/auth/login'
    }) 
  }
}