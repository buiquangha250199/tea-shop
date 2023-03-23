export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchProducts({ commit }, searchParams) {
    const url = searchParams
      ? `${this.$config.baseUrl}products?search=${searchParams}`
      : `${this.$config.baseUrl}products/`
    const { results } = await this.$axios.$get(url)

    // update state by committing a mutation
    commit('setProducts', results)

    return results
  },
}
