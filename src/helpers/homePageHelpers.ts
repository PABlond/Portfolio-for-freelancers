const formatHeader = edges => ({
  __html: edges
    .map(mod => (mod.node.frontmatter.title == "header" ? mod.node.html : null))
    .filter(Boolean)[0],
})
const formatAbout = edges => ({
  __html: edges
    .map(mod => (mod.node.frontmatter.title == "about" ? mod.node.html : null))
    .filter(Boolean)[0],
})

const formatWorks = edges => ({
  __html: edges
    .map(mod => {
      return mod.node.frontmatter.title == "works" ? mod.node.html : null
    })
    .filter(Boolean)[0],
})

const formatCertifications = edges =>
  edges.map(certification => certification.node.childImageSharp)

export default data => ({
  header: formatHeader(data.allMarkdownRemark.edges),
  about: formatAbout(data.allMarkdownRemark.edges),
  certifications: formatCertifications(data.allFile.edges),
  works: formatWorks(data.allMarkdownRemark.edges),
})
