import mealsResolvers from './meals'
const resolvers = {
  Query: Object.assign({},
    mealsResolvers.Query
    ),
  //Mutation: Object.assign({},
  //  mealsResolvers.Mutation
  //),
}
export default resolvers