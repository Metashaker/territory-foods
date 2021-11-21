import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import dotenv from "dotenv";

import { typeDefs } from './schema'

console.log(`${__dirname}/typedefs/`)



const schema = makeExecutableSchema({
  typeDefs
})
const server = new ApolloServer({
  schema
})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})