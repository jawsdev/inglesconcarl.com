import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckkegqq5qhau401w733co3j2g/master'
)

export default (_, inject) => {
  inject('graphcms', graphcmsClient)
}
