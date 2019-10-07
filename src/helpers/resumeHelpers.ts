import { IAllMarkdownRemark,IMdNode } from "./../interfaces/query.interface"

const formatWorks = (works: IMdNode['node'][]) =>
  works.map(work => {
    const title = work.html.split("<h4>")[1].split("</h4>")[0]
    const content = work.html.split("<h6>")[1].split("</h6>")[0]
    const technos = work.html.split("<p>")[2].split("</p>")[0]
    const __html = work.html
    const n = parseInt(work.frontmatter.title.split("-")[1])
    return { title, content, technos, __html, n }
  })

const formatHeader = (str: string) => {
  const name = str.split("<h1>")[1].split("</h1>")[0]
  const title = str.split("<h2>")[1].split("</h2>")[0]
  return { name, title }
}

const formatWorksData = (edges: IAllMarkdownRemark["edges"]) =>
  formatWorks(
    (edges
      .map((mod: IMdNode) => {
        return mod.node.frontmatter.title.indexOf("work-") !== -1
          ? mod.node
          : null
      })
      .filter(Boolean) as IMdNode['node'][])
  )

const formatAboutData = (edges: IAllMarkdownRemark["edges"]) =>
  (edges
    .map((mod: IMdNode) =>
      mod.node.frontmatter.title == "about" ? mod.node.html : null
    )
    .filter(Boolean)[0] as string)
    .split("</p>")
    .map((str: string) => {
      return str.split("<p>")[1]
    })
    .slice(1)
    .filter(Boolean)

const formatHeaderData = (edges: IAllMarkdownRemark["edges"]) =>
  formatHeader(
    (edges
      .map((mod: IMdNode) =>
        mod.node.frontmatter.title == "header" ? mod.node.html : null
      )
      .filter(Boolean)[0] as string)
  )

export default (edges: IAllMarkdownRemark["edges"]) => ({
  header: formatHeaderData(edges),
  about: formatAboutData(edges),
  works: formatWorksData(edges),
})
