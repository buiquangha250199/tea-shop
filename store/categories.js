export const state = () => ({
  categories: [],
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    const results = await this.$axios.$get(`${this.$config.baseUrl}categories/`)

    commit('setCategories', results)

    return results
  },
}
