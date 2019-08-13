import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import pageStructure from "./pageStructure"
import axios from "axios"

import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import Head from "./../Head"
import About from "./../About"
import Loading from "./../Loading"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      isLoading: true,
      works: undefined,
      certifications: undefined,
    }
    this._pageScroller = null
  }

  async componentDidMount() {
    await this.getData()
  }

  sortAsc = (a, b) =>
    parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

  pageOnChange = number => this.setState({ currentPage: number })

  getData = async () => {
    const { isLoading } = this.state
    if (isLoading) {
      const response = await axios.get(`https://fir-fiverr-a2e6b.appspot.com/graphql?query={
        works {
          title
          image,
          content,
          technos
        }
        certifications {
          thumbnail
        }
      }`)
      const { works, certifications } = response.data.data
      this.setState({
        works,
        certifications,
        isLoading: false,
      })
    }
  }

  render() {
    // console.log(this.props)
    const { isLoading, works, certifications } = this.state
    const { edges } = this.props
    return isLoading ? (
      <Loading />
    ) : (
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
              return (
                <About
                  isMobile={this.props.isMobile}
                  {...props}
                  certifications={certifications}
                />
              )
            case 3:
              return (
                <Works
                  isMobile={this.props.isMobile}
                  {...props}
                  works={works}
                />
              )
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
