import https from '@/network/https'
import Swal from 'sweetalert2'

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
      Swal.fire({
        title: 'Oopss...',
        text: 'Parece que suas credenciais não foram autorizadas. Tente novamente!',
        icon: 'warning'
      })
      throw err
    } finally {
      dispatch('loading/changeLoadingState', false, {root: true})
    }
  },
  async recoverPassword ({ state, commit }, payload) {
    try {
      await this.$axios.post(`${state.url}/email/password`, { email: payload }, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        Swal.fire({
          title: 'Tudo certo!',
          text: 'Um e-mail foi enviado para você com um link para redefinir senha.',
          icon: 'success'
        }) 
      })
    } catch (err) {
      Swal.fire({
        title: 'Oopss...',
        text: 'Parece que suas credenciais não foram autorizadas. Tente novamente!',
        icon: 'error'
      })
      throw err
    }
  },
  async newPassword ({ state, commit }, payload) {
    try {
      await this.$axios.post(`${state.url}/authenticate/change/pwd`, payload, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        Swal.fire({
          title: 'Tudo certo!',
          text: 'Redefinimos sua senha.',
          icon: 'success'
        }) 
      })
    } catch (error) {
      Swal.fire({
        title: 'Oopss...',
        text: 'Parece que algo deu errado. Tente novamente mais tarde!',
        icon: 'error'
      })
      throw err
    }
  },
  doLogout ({ commit }) {
    commit('setToken', null)
    this.$router.push({
      path: '/auth/login'
    }) 
  }
}