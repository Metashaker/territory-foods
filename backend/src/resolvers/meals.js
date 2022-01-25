import fs from "fs"
import csv from "csv-parser"
import path from "path"


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
        const streamResults = []
        return new Promise((resolve, reject) => {
          fs.createReadStream(path.join(`${__dirname}/../db/`, "meals.csv"))
          .pipe(csv())
          .on('data', (data) => streamResults.push(data))
          .on('end', () => {
            for (let i = 0; i < streamResults.length; i++) {
              streamResults[i].tags = streamResults[i].tags.split(",")
              //console.log(streamResults[i].tags)
              const tagBag = []
              for (let j = 0; j < streamResults[i].tags.length; j++) {
                if (streamResults[i].tags[j].length > 2) {
                  streamResults[i].tags[j] = streamResults[i].tags[j].replaceAll(/[\[\]']+/g, "")
                  tagBag.push(streamResults[i].tags[j].trim())
                }
                if (streamResults[i].tags[j].length < 2) {
                  streamResults[i].tags[j] = []
                }
              }
              streamResults[i].tags = tagBag
            }
            resolve(streamResults)
            if (streamResults.length === 0) {
              reject(new Error('No elements found'))
            }
          })
        }).then(() => streamResults).catch(e => console.log(e))
    }
  },
  //Mutation: {}
}
export default resolvers

