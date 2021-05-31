import { gql } from 'graphql-request'
export default async function ({ store, app }) {
  const { pages } = await app.$graphcms.request(
    gql`
      {
        pages(stage: PUBLISHED, locales: en, orderBy: navigationOrder_ASC) {
          heroSubtitle
          heroTitle
          id
          locale
          slug
          title
          main {
            html
          }
          heroImage(locales: en) {
            url
            width
          }
          enableHeroTitleHover
        }
      }
    `
  )

  store.dispatch('putPagesEn', pages)
}
