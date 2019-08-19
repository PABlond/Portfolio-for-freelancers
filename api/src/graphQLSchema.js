import { makeExecutableSchema } from "graphql-tools"
import typeDefs from './typeDefs'
import {
  contactResolvers,
  aboutResolvers,
  headerResolver,
  worksResolvers,
  authResolvers
} from "./resolvers"

const { contact, isRead, sendMessage } = contactResolvers
const { about, setAboutDesc, certifications } = aboutResolvers
const { header, setHeader } = headerResolver
const { works, setWorks } = worksResolvers
const {login} = authResolvers
const resolvers = {
  Query: {
    contact,
    isRead,
    sendMessage,
    about,
    setAboutDesc,
    header,
    setHeader,
    certifications,
    works,
    setWorks,
    login
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
