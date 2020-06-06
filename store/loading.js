export const state = () => ({
  isLoading: false
})

export const getters = {
  isLoading: (state) => {
    return state.isLoading
  }
}

export const mutations = {
  setLoadingState (state, loading) {
    state.isLoading = loading
  }
}

export const actions = {
  changeLoadingState ({ commit }, loading) {
    commit('setLoadingState', loading)
  }
}