import { gql } from 'graphql-request'
export default async function ({ store, app }) {
  const { pages } = await app.$graphcms.request(
    gql`
      {
        pages(
          stage: PUBLISHED
          locales: en
          where: { NOT: { slug: "home-page" } }
        ) {
          heroSubtitle
          heroTitle
          id
          locale
          slug
          title
          main {
            text
          }
          heroImage(locales: en) {
            url
            width
          }
        }
      }
    `
  )

  store.dispatch('putPagesEn', pages)
}
