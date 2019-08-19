import Certification from "./../models/certification"
import { makeExecutableSchema } from "graphql-tools"
import Work from "./../models/work"
import User from "./../models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Header from "./../models/header"
import About from "./../models/about"

const typeDefs = `
    type Header{
      _id: String,
      name: String!,
      title: String!,
      subtitle: String!
    }
    type ImgAbout {
      href: String,
      alt: String
    }
    type SkillNode {
      id: String,
      group: Int
    }
    type LinksNode {
      source: String,
      target: String,
      value: Int
    }
    type Skills {
      title: String,
      nodes: [SkillNode],
      links: [LinksNode]
    }
    type AboutDescription {
      content: String,
    }
    type About {
      img: ImgAbout,
      certifications: [Certification],
      skills: [Skills]
      description: [AboutDescription]
    }
    type Certification{
        _id: String,
        original: String,
        thumbnail: String
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
        about: About,
        header: Header,
        certifications: [Certification],
        works: [Work],
        certification(_id: String): Certification
        login (username: String!, password: String!): String
        setAboutDesc (description: [String]): About
        setWorks (works: [String]): [Work]
    }
`

const resolvers = {
  Query: {
    async about(root, args, context, info) {
      const data = await About.find({})
      return data[data.length - 1]
    },
    async setAboutDesc(root, args, context, info) {
      const { description } = args
      const data = await About.findOne({})
      data.description = description.map(content => ({ content }))
      await data.save().catch(err => console.log("ERROR ", err))
      return data
    },
    async header(root, args, context, info) {
      const data = await Header.find({})
      return data[data.length - 1]
    },
    async certifications(root, args, context, info) {
      const data = await Certification.find({})
      return data
    },
    async works(root, args, context, info) {
      const data = await Work.find({})
      return data
    },
    async login(root, args, context, info) {
      const { username } = args
      const user = await User.findOne({ username })
      if (Object.keys(user).length) {
        if (bcrypt.compareSync(args.password, user.password)) {
          const { JWT_SECRET } = process.env
          const token = jwt.sign({ username }, JWT_SECRET)
          return token
        }
      }
      return new Error(404)
    },
    async setWorks(root, args, context, info) {
      const works = args.works.map(work => JSON.parse(work))
      await Work.remove({})
      works.forEach(async work => {
        await new Work(work).save()
      })
      return works
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
