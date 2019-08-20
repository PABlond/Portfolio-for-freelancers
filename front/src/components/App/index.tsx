import React, { Component } from "react"
import ReactPageScroller from "react-page-scroller"
import axios from "axios"
import store from "./../../state/store"
import constants from "./../../state/constants"
import Head from "./../Head"
import Loading from "./../Loading"
import orderApp from "./orderApp"

export default class App extends Component {
  state: {isLoading: boolean} = { isLoading: true }
  constructor(props: any) {
    super(props)
  }
  _pageScroller = null

  sortAsc = (a: any, b: any) =>
    parseInt(a.node.frontmatter.title) - parseInt(b.node.frontmatter.title)

  pageOnChange = (number: number) => this.setState({ currentPage: number })

  getData = async () => {
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
    return this.state.isLoading ? (
      <Loading />
    ) : isMobile ? (
      <div>
        <Head />
        {[...Array(4).keys()].map(i => orderApp(i))}
      </div>
    ) : (
      <div>
        <Head />
        <ReactPageScroller
          ref={(c: any) => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}
        >
          {[...Array(4).keys()].map(i => orderApp(i))}
        </ReactPageScroller>
      </div>
    )
  }
}
