export const state = () => ({
  language: 'es',
  pagesEn: [],
  pagesEs: []
})

export const getters = {
  getLanguage: (state) => state.language,
  getPagesEn: (state) => state.pagesEn,
  getPagesEs: (state) => state.pagesEs
}

export const mutations = {
  SET_LANGUAGE(state, language) {
    state.language = language
  },

  SET_PAGES_EN(state, pagesEn) {
    state.pagesEn = pagesEn
  },

  SET_PAGES_ES(state, pagesEs) {
    state.pagesEs = pagesEs
  }
}

export const actions = {
  putLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },

  putPagesEn({ commit }, pagesEn) {
    commit('SET_PAGES_EN', pagesEn)
  },

  putPagesEs({ commit }, pagesEs) {
    commit('SET_PAGES_ES', pagesEs)
  }
}
