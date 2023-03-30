import { formatNumber } from '~/helper/common'

export const state = () => ({
  products: [],
  searchingProducts: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setSearchingProducts(state, products) {
    state.searchingProducts = products
  },
}

export const actions = {
  async fetchProducts(
    { commit },
    { searchParams = '', page = 1, limit = 1000, isSave = true }
  ) {
    const url = searchParams
      ? `${this.$config.baseUrl}products/?search=${searchParams}&page=${page}&limit=${limit}`
      : `${this.$config.baseUrl}products/?page=${page}&page_size=${limit}`
    const { results } = await this.$axios.$get(url)

    // update state by committing a mutation

    const productFormatted = results.map((product) => {
      return {
        ...product,
        price: formatNumber(product.price),
        priceValue: product.price,
      }
    })

    if (isSave) commit('setProducts', productFormatted)
    else commit('setSearchingProducts', productFormatted)
    return productFormatted
  },
}
