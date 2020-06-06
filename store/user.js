import  jwt from '~/plugins/jwt';

export const state = () => ({
  value: 'myvalue'
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
  getUser({ commit }, payload) {
    // todo
    let user = jwt.decode(payload)
    console.log(user)
  }
}