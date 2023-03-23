export const state = () => ({
  products: [],
})

export const getters = {
  getProducts(state) {
    return state.counter
  },
}

export const actions = {
  async fetchProducts({ state }, searchParams) {
    // make request
    const { results } = await this.$axios.$get(
      `${this.$config.baseUrl}products?search=${searchParams}`
    )
    state.products = results
    return results
  },
}
