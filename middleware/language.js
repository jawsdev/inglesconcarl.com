export default function ({ route, store }) {
  if (route.params.language) {
    const currentLanguage = route.params.language
    store.dispatch('putLanguage', currentLanguage)
  }
}
