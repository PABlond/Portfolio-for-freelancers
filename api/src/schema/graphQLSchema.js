import Certification from "./../models/certification"
import { makeExecutableSchema } from "graphql-tools"
import Work from "./../models/work"
import User from "./../models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Header from "./../models/header"
import About from "./../models/about"
import Contact from "../models/contact"
import sendMail from "./../utils/sendMail"

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
    type Contact {
      _id: String,
      email: String,
      name: String,
      content: String,
      at: String,
      isRead: Boolean
    }
    type Query{
        contact (token: String): [Contact]
        about: About,
        header: Header,
        certifications: [Certification],
        works: [Work],
        certification(_id: String): Certification
        login (username: String!, password: String!): String
        setAboutDesc (description: [String]): About
        setWorks (works: [String]): [Work]
        setHeader (name: String, title: String, subtitle: String): Header
        sendMessage (name: String, email: String, content: String): String
        isRead (_id: String, token: String): [Contact]
    }
`

const resolvers = {
  Query: {
    async contact(root, args, context, info) {
      const { token } = args
      const { JWT_SECRET } = process.env
      const isLogged = await jwt.verify(
        token,
        JWT_SECRET,
        async (err, decoded) => !!decoded
      )
      return isLogged ? await Contact.find({}) : []
    },
    async isRead(root, args, context, info) {
      const {_id, token} = args
      const { JWT_SECRET } = process.env
      const isLogged = await jwt.verify(
        token,
        JWT_SECRET,
        async (err, decoded) => !!decoded
      )
      if (isLogged) {
        const data = await Contact.findOne({_id})
        data.isRead = true
        await data.save()
      }
      return isLogged ? await Contact.find({}) : []
    },
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
    async setHeader(root, args, context, info) {
      const { name, title, subtitle } = args
      const data = await Header.findOne({})
      data.name = name
      data.title = title
      data.subtitle = subtitle
      await data.save().catch(err => console.log("ERROR ", err))
      return { name, title, subtitle }
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
    },
    async sendMessage(root, args, context, info) {
      const { name, email, content } = args
      await new Contact({ name, email, content }).save()
      const isSent = await sendMail({ name, email, content })
      return "args"
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
