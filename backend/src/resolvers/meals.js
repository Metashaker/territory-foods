import fs from "fs"
import path from "path"
import { CSVToJSON } from '../utils/data-parsing'

const resolvers = {
  Query: {
    meals: async (parent, args, context, info) => {
      let meals = await fs.promises.readFile(path.join(`${__dirname}/../db/`, "meals.csv"),
        'utf-8', async (err, data) => {
          if (err) {
            throw err
          }
          return data
        })
        //filter elements without titles (empty elements)
      meals = CSVToJSON(meals).filter(meal => meal?.title)
      //filter empty tags, and fixes data type from string to array from tags with strings in them
      const regExp = /[a-zA-Z]/g;
      meals = meals.map(meal => {
        if (meal.tags, regExp.test(meal.tags)) {
          meal.tags = meal.tags.match(/'([^']+)'/)[1].split(1,-1)
        }
        if (!regExp.test(meal.tags)) {
          meal.tags = []
        }
        return meal
      })
      return meals
    }
  },
  //Mutation: {}
}
export default resolvers

