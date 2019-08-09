import React from "react"
import { graphql } from "gatsby"
import Works from './../components/Works'
import Certifications from './../components/Certifications'
import Contact from './../components/Contact'
import Head from './../components/Head'
import './../styles/style_desktop.scss'

export default ({
  data: { allMarkdownRemark: { edges } }
}) => (
    <div>
      <Head />
      {edges
        .sort((a, b) =>
          parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)
        )
        .map((mod, key) => {
          const props = { key, content: { __html: mod.node.html, n: mod.node.frontmatter.title } }

          switch (parseInt(props.content.n)) {
            case 4:
              return <Certifications {...props} />
            case 5:
              return <Works {...props} />
            case 6:
              return <Contact {...props} />
            default:
              return <div key={key} dangerouslySetInnerHTML={props.content} id={'module-' + props.content.n} />
          }
        })
      }
    </div>
  )

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`