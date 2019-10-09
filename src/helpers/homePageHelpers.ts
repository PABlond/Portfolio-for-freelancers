import { IHomeData } from "./../interfaces/query.interface"

const formatHeader = (edges: IHomeData["allMarkdownRemark"]["edges"]) => ({
  __html: edges
    .map(mod => (mod.node.frontmatter.title == "header" ? mod.node.html : null))
    .filter(Boolean)[0],
})
const formatAbout = (edges: IHomeData["allMarkdownRemark"]["edges"]) => ({
  __html: edges
    .map(mod => {
      console.log(mod.node.frontmatter.title == "about" ? mod.node.html : null)
      return (mod.node.frontmatter.title == "about" ? mod.node.html : null)})
    .filter(Boolean)[0],
})

const formatWorks = (edges: IHomeData["allMarkdownRemark"]["edges"]) => ({
  __html: edges
    .map((mod, i) => {
      return mod.node.frontmatter.title.indexOf("work-") !== -1
        ? mod.node.html
        : null
    })
    .filter(Boolean)
    .join(""),
})

const formatCertifications = (edges: IHomeData["allFile"]["edges"]) =>
  edges.map(certification => certification.node.childImageSharp)

export default (data: IHomeData) => ({
  header: formatHeader(data.allMarkdownRemark.edges),
  about: formatAbout(data.allMarkdownRemark.edges),
  certifications: formatCertifications(data.allFile.edges),
  works: formatWorks(data.allMarkdownRemark.edges),
})
