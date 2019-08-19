import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import axios from "axios"
import store from "./../../state/store"
import constants from "./../../state/constants"
import Head from "./../Head"
import Loading from "./../Loading"
import orderApp from "./orderApp"

export default class App extends Component {
  constructor(props) {
    super(props)
    this._pageScroller = null
    this.state = { isLoading: true }
  }

  sortAsc = (a, b) =>
    parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

  pageOnChange = number => this.setState({ currentPage: number })

  getData = async () => {
    const { works, certifications } = store.getState().content
    if (this.state.isLoading) {
      const response = await axios.get(`https://fir-fiverr-a2e6b.appspot.com/graphql?query={
        works {
          title
          image,
          content,
          technos
        }
        header {
          name
          title
          subtitle
        }
        about {
          img {
            href
            alt
          } 
          certifications {
            thumbnail
          } 
          skills {
            title
            nodes {
              id
              group
            }
            links {
              source
              target
              value
            }
            
          }
          description {
            content
          }
        }
      }`)
      const { works, certifications, header, about } = response.data.data
      const { getContent } = constants
      store.dispatch({
        type: getContent.name,
        payload: { works, certifications, header, about },
      })
      this.setState({ isLoading: false })
    }
  }

  async componentDidMount() {
    await this.getData()
  }

  render() {
    const props = store.getState()
    const { isMobile } = props.nav
    const { edges } = this.props
    return this.state.isLoading ? (
      <Loading />
    ) : isMobile ? (
      <div>
        <Head />
        {edges.sort(this.sortAsc).map((mod, key) => {
          const props = {
            key,
            content: { __html: mod.node.html, n: mod.node.frontmatter.title },
          }

          return orderApp(props)
        })}
      </div>
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

            return orderApp(props)
          })}
        </ReactPageScroller>
      </div>
    )
  }
}
