import React from "react"
import { graphql } from "gatsby"
import "./../styles/style_desktop.scss"
import constants from "./../state/constants"
import store from "./../state/store"
import App from "./../components/App"

export default class Landing extends React.Component {
  componentDidMount() {
    const { setNav } = constants
    if (document !== "undefined") {
      const { innerHeight, innerWidth } = window
      store.dispatch({
        type: setNav.name,
        payload: { innerWidth, innerHeight, isMobile: !!(innerWidth < 768) },
      })
    }
  }

  render() {
    console.log()
    const { edges } = this.props.data.allMarkdownRemark
    const { isMobile } = store.getState().nav

    console.log(store.getState())
    const props = { edges, isMobile }
    return <App {...props} />
  }
}

// export default ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => {
//   document.body.clientWidth > 768 ? (
//     <App edges={edges} />
//   ) : (
//     <AppMobile edges={edges} />
//   )}

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
