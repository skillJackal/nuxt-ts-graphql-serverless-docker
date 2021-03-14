import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express()

app.get('/api/hello/world', (_req, res) => {
    res.json({msg:'Hello World'})
})

app.get('/api/hello/universe', (_req, res) => {
    res.json({msg:'Hello Universe'})
})

const typeDefs = gql`
    type Query {
        hello(name: String): String
    }
`

const resolvers = {
    Query: {
        hello : function (_parent:any, args:any, _context:any, _info:any) {
            return 'Hello '+args.name+'!';
        } 
    },
}

const server = new ApolloServer({ typeDefs, resolvers,
    introspection: true, playground: true,
    subscriptions: {path: '/api'},
})

server.applyMiddleware({ app, path: '/api', cors: true })

export = app