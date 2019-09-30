import ApolloClient from 'apollo-boost';
import constants from './constants'

export default new ApolloClient({
  uri: `${constants.api.url}graphql`,
});