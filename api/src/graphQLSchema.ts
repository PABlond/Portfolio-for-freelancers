import { makeExecutableSchema } from "graphql-tools"
import typeDefs from "./typeDefs"
import {
  contactResolvers,
  aboutResolvers,
  headerResolver,
  worksResolvers,
  authResolvers,
  analyticsResolvers
} from "./resolvers"

const { contact, isRead, sendMessage } = contactResolvers
const { about, setAboutDesc, certifications } = aboutResolvers
const { header, setHeader } = headerResolver
const { works, setWorks } = worksResolvers
const { login } = authResolvers
const { getPageViews } = analyticsResolvers
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
    login,
    getPageViews
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
