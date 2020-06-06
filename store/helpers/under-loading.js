export function underLoadingFunction (actionFn) {
  return async function (context, payload) {
    context.commit('loading/setLoadingState', true, { root: true })
    try {
      return await actionFn.call(this, context, payload)
    } finally {
      context.commit('loading/setLoadingState', false, { root: true })
    }
  }
}
