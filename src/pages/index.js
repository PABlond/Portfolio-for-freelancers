import React from "react"
import { graphql } from "gatsby"
import Works from "./../components/Works"
import Certifications from "./../components/Certifications"
import Contact from "./../components/Contact"
import Head from "./../components/Head"
import About from "./../components/About"
import "./../styles/style_desktop.scss"
import ReactPageScroller from "react-page-scroller"
import pageStructure from '../pageStructure'
import Header from "./../components/Header"

const sortAsc = (a, b) =>
  parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  let reactPageScroller = null
  const goToPage = eventKey => {
    this.reactPageScroller.goToPage(eventKey)
  }
  return <App edges={edges} />
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: 1 }
    this._pageScroller = null
  }

  pageOnChange = number => this.setState({ currentPage: number })

  render() {
    const { edges } = this.props
    return (
      <div>
        <Head />
        <ReactPageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}
        >
          {edges.sort(sortAsc).map((mod, key) => {
            const props = {
              key,
              content: { __html: mod.node.html, n: mod.node.frontmatter.title },
            }

            switch (parseInt(props.content.n)) {
              case 1:
                return <Header {...props} />
              case 2:
                return <About {...props} />
              case 3:
                return <Works {...props} />
              case 4:
                return <Contact {...props} />
              default:
                return (
                  <div
                    key={key}
                    dangerouslySetInnerHTML={props.content}
                    id={pageStructure[props.content.n].id}
                  />
                )
            }
          })}
        </ReactPageScroller>
      </div>
    )
  }
}

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
