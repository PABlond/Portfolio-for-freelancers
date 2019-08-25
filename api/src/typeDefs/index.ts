import aboutType from './aboutType'
import headerType from './headerType'
import worksType from './worksType'
import contactType from './contactType'
import authType from './authType'
import analyticType from './analyticType'

export default `
${headerType}
${aboutType}
${worksType}
${contactType}
${authType}
${analyticType}
type Query{
    contact (token: String): [Contact]
    about: About,
    header: Header,
    certifications: [Certification],
    works: [Work],
    certification(_id: String): Certification
    login (username: String!, password: String!): String
    setAboutDesc (description: [String], token: String): About
    setWorks (works: [String], token: String): [Work]
    setHeader (name: String, title: String, subtitle: String, token: String): Header
    sendMessage (name: String, email: String, content: String): String
    isRead (_id: String, token: String): [Contact]
    getPageViews (from: String, token: String): PageViews
}
`
