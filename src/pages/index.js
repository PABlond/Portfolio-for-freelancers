import React from "react"
import { graphql } from "gatsby"
import "./../styles/style_desktop.scss"

import App from './../components/App'

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => <App edges={edges} />

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
