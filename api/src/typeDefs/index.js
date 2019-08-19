export default `
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
