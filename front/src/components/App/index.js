import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import pageStructure from "./pageStructure"
import axios from "axios"
import { Spinner } from "react-bootstrap"
import store from "./../../state/store"
import constants from "./../../state/constants"
import Header from "./../Header"
import Works from "./../Works"
import Contact from "./../Contact"
import Head from "./../Head"
import About from "./../About"
import Loading from "./../Loading"
import AppMobile from './indexMobile'
import orderApp from "./orderApp"

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
      const { getContent } = constants
      store.dispatch({
        type: getContent.name,
        payload: { works, certifications },
      })
      this.setState({
        works,
        certifications,
        isLoading: false,
      })
    }
  }

  async componentDidMount() {
    await this.getData()
  }

  render() {
    const props = store.getState()
    const { works, certifications } = props.content
    const { isMobile } = props.nav
    const { edges } = this.props
    return works.length && certifications.length ? (
      <Loading />
    ) : isMobile ? (
      <AppMobile props={this.props} />
    ) : (
      <div>
        <Head />
        <ReactPageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}
        >
          {edges.sort(this.sortAsc).map((mod, key) => {
            const props = {
              key,
              content: { __html: mod.node.html, n: mod.node.frontmatter.title },
            }

            return orderApp(props, key)
          })}
        </ReactPageScroller>
      </div>
    )
  }
}
