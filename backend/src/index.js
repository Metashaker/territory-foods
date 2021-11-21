import { ApolloServer } from 'apollo-server'
console.log('entered')

const server = new ApolloServer()
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})