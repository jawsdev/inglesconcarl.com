export const state = () => ({
  language: 'Es',
  pagesEn: [],
  pagesEs: []
})

export const getters = {
  getLanguage: (state) => state.language,
  getPagesEn: (state) => state.pagesEn,
  getPagesEs: (state) => state.pagesEs
}

export const mutations = {
  changeToEn(state) {
    state.language = 'En'
  },

  changeToEs(state) {
    state.language = 'Es'
  },

  SET_PAGES_EN(state, pagesEn) {
    state.pagesEn = pagesEn
  },

  SET_PAGES_ES(state, pagesEs) {
    state.pagesEs = pagesEs
  }
}

export const actions = {
  changeToEn: ({ commit }) => commit('changeToEn'),

  changeToEs: ({ commit }) => commit('changeToEs'),

  putPagesEn({ commit }, pagesEn) {
    commit('SET_PAGES_EN', pagesEn)
  },

  putPagesEs({ commit }, pagesEs) {
    commit('SET_PAGES_ES', pagesEs)
  }
}
