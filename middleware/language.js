export default function ({ route, store }) {
  if (route.params.language) {
    const currentLanguage = route.params.language
    console.log('currentLanguage', currentLanguage)
    store.dispatch('putLanguage', currentLanguage)
  }
}
