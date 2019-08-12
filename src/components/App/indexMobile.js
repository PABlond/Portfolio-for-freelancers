import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import pageStructure from "./pageStructure"

import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import Head from "./../Head"
import About from "./../About"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: 1 }
    this._pageScroller = null
  }

  sortAsc = (a, b) =>
    parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

  pageOnChange = number => this.setState({ currentPage: number })

  render() {
    const { edges } = this.props
    return (
      <div>
        <Head />
          {edges.sort(this.sortAsc).map((mod, key) => {
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
      </div>
    )
  }
}
