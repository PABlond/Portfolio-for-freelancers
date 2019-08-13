import React from "react"
import { graphql } from "gatsby"
import "./../styles/style_desktop.scss"
import constants from "./../state/constants"
import Loading from "./../components/Loading"
import store from "./../state/store"
import App from "./../components/App"
import AppMobile from "./../components/App/indexMobile"

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
    const { edges } = this.props.data.allMarkdownRemark
    const { isMobile } = store.getState().nav
    const props = { edges, isMobile }
    return isMobile ? <App {...props} /> : <AppMobile {...props} />
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
