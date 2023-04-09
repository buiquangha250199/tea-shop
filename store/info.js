export const state = () => ({
  info: [],
})

export const mutations = {
  setInfo(state, info) {
    state.info = info
  },
}

export const actions = {
  async fetchInfo({ commit }) {
    const results = await this.$axios.$get(`${this.$config.baseUrl}info/`)

    commit('setInfo', results)

    return results
  },
}
