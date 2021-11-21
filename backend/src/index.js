import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import dotenv from "dotenv";

import resolvers from './resolvers/index'
import { typeDefs } from './schema'




const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const server = new ApolloServer({
  schema,
  //cors: {
  //  origin: [process.env.ENVIRONMENT_URL],
  //  credentials: false
  //},
})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})