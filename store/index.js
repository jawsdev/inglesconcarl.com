export const state = () => ({
  language: 'es',
  pages: []
})

export const getters = {
  getPages: (state) => state.pages
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  }

  // SET_PAGES_SPANISH(state, pagesSpanish) {
  //   state.pages.spanish = pagesSpanish
  // }
}

export const actions = {
  putPages({ commit }, pages) {
    commit('SET_PAGES', pages)
  }

  // putPagesSpanish({ commit }, pagesSpanish) {
  //   commit('SET_PAGES_SPANISH', pagesSpanish)
  // }
}
