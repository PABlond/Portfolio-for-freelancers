const header = edges => ({
  __html: edges
    .map(mod => (mod.node.frontmatter.title == "header" ? mod.node.html : null))
    .filter(Boolean)[0],
})
const about = edges => ({
  __html: edges
    .map(mod => (mod.node.frontmatter.title == "about" ? mod.node.html : null))
    .filter(Boolean)[0],
})

const works = edges => ({
  __html: edges
    .map(mod => {
      return mod.node.frontmatter.title == "works" ? mod.node.html : null
    })
    .filter(Boolean)[0],
})

const certifications = edges =>
  edges.map((certification) => certification.node.childImageSharp)

export default {
  header,
  about,
  works,
  certifications,
}
