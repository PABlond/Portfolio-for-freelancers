import React from "react"
import { graphql } from "gatsby"
import "./../styles/style_desktop.scss"
import Loading from "./../components/Loading"

import App from "./../components/App"
import AppMobile from "./../components/App/indexMobile"

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: { value: false, dimension: { width: 0, height: 0 } },
    }
  }

  componentDidMount() {
    if (document !== "undefined")
      this.setState({
        isMobile: {
          value: !!(document.body.clientWidth > 768),
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        },
      })
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark
    const { isMobile } = this.state
    const props = { edges, isMobile }
    return isMobile.value && isMobile.width ? (
      isMobile.value ? (
        <App {...props} />
      ) : (
        <AppMobile {...props} />
      )
    ) : (
      <Loading />
    )
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
