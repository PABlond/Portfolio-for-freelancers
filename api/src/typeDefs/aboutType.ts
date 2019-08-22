export default `
type ImgAbout {
  href: String,
  alt: String
}
type AboutDescription {
  content: String,
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
}`
