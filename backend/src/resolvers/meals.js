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
      meals = CSVToJSON(meals).filter(meal => meal?.title)
      return meals
    }
  },
  //Mutation: {}
}
export default resolvers

