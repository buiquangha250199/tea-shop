export const state = () => ({
  banners: [],
})

export const mutations = {
  setBanners(state, banners) {
    state.banners = banners
  },
}

export const actions = {
  async fetchBanners({ commit }) {
    const results = await this.$axios.$get(`${this.$config.baseUrl}banners/`)

    commit('setBanners', results)

    return results
  },
}
