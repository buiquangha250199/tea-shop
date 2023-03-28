export const state = () => ({
  news: [],
})

export const mutations = {
  setNews(state, news) {
    state.news = news
  },
}

export const actions = {
  async fetchNews({ commit }) {
    const { results } = await this.$axios.$get(`${this.$config.baseUrl}news/`)

    commit('setNews', results)

    return results
  },
}
