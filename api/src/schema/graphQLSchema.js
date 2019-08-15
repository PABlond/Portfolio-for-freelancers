import Certification from "./../models/certification"
import { makeExecutableSchema } from "graphql-tools"
import Work from "./../models/work"
import User from "./../models/user"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const typeDefs = `
    type Certification{
        _id: String,
        original: String!,
        thumbnail: String!
    }
    type Work{
        _id: String,
        title: String!,
        image: String!,
        content: String!,
        technos: String!
    }
    type User {
      id: Int!
      username: String!
      email: String!
    }
    type Query{
        certifications: [Certification],
        works: [Work],
        certification(_id: String): Certification
        login (username: String!, password: String!): String
    }
`

const resolvers = {
  Query: {
    async certifications(root, args, context, info) {
      const data = await Certification.find({})
      return data
    },
    async works(root, args, context, info) {
      const data = await Work.find({})
      return data
    },
    async login(root, args, context, info) {
      const {username} = args
      const user = await User.findOne({username})
      if (Object.keys(user).length) {
        if (bcrypt.compareSync(args.password, user.password)) {
          const {JWT_SECRET} = process.env
          const token = jwt.sign({ username }, JWT_SECRET);
          return token
        }
      }
      return new Error(404);
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
