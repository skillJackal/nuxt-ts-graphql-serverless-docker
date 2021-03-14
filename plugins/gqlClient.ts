import ApolloClient from 'apollo-boost'
import fetch from 'cross-fetch'

export default (context:any, inject:any) => {
    const client = new ApolloClient({
        fetch: fetch,
        uri: (typeof window === 'undefined') ? context.env.apiBaseURL : context.env.browserApiBaseURL
    })
    inject('gqlClient', client)
}
