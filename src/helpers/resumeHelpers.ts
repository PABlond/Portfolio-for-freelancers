const formatWorks = works =>
  works.map(work => {
    const title = work.html.split("<h4>")[1].split("</h4>")[0]
    const content = work.html.split("<h6>")[1].split("</h6>")[0]
    const technos = work.html.split("<p>")[2].split("</p>")[0]
    const __html = work.html
    const n = parseInt(work.frontmatter.title.split("-")[1])
    return { title, content, technos, __html, n }
  })

const formatHeader = str => {
  const name = str.split("<h1>")[1].split("</h1>")[0]
  const title = str.split("<h2>")[1].split("</h2>")[0]
  return { name, title }
}

const formatWorksData = edges =>
  formatWorks(
    edges
      .map((mod: IMdNode) => {
        return mod.node.frontmatter.title.indexOf("work-") !== -1
          ? mod.node
          : null
      })
      .filter(Boolean)
  )

const formatAboutData = edges =>
  edges
    .map((mod: IMdNode) =>
      mod.node.frontmatter.title == "about" ? mod.node.html : null
    )
    .filter(Boolean)[0]
    .split("</p>")
    .map(str => {
      return str.split("<p>")[1]
    })
    .slice(1)
    .filter(Boolean)

const formatHeaderData = edges =>
  formatHeader(
    edges
      .map((mod: IMdNode) =>
        mod.node.frontmatter.title == "header" ? mod.node.html : null
      )
      .filter(Boolean)[0]
  )

export default edges => ({
  header: formatHeaderData(edges),
  about: formatAboutData(edges),
  works: formatWorksData(edges),
})
