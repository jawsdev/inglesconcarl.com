import { gql } from 'graphql-request'
export default async function ({ store, app }) {
  const { pages } = await app.$graphcms.request(
    gql`
      {
        pages(locales: en, stage: PUBLISHED) {
          heroSubtitle
          heroTitle
          id
          locale
          slug
          title
          main {
            text
          }
        }
      }
    `
  )
  store.dispatch('putPages', pages)
}
