import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://graphapi.cafeswap.finance/subgraphs/name/cafeswap/cafeswap-subgraph-bsc'
  }),
  cache: new InMemoryCache()
})
