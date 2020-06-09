import  jwt from '~/plugins/jwt';

export const state = () => ({
  user: {
    id: null,
    name: null,
    email: null, 
    role: null
  }
})

export const getters = {

}

export const mutations = {
  userId: (state, payload) => {
    state.user = {...state.user, id: payload}
  },
  userName: (state, payload) => {
    state.user = {...state.user, name: payload}
  },
  userEmail: (state, payload) => {
    state.user = {...state.user, email: payload}
  },
  userRole: (state, payload) => {
    state.user = {...state.user, role: payload}
  }
}

export const actions = {
  getUser({ commit }, payload) {
    let user = jwt.decode(payload)
    commit('userId', user.userInfos.id)
    commit('userName', user.userInfos.name)
    commit('userEmail', user.userInfos.email)
    commit('userRole', user.userInfos.userRole.id)
  }
}