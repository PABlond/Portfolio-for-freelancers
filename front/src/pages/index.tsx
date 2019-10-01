import React, { useEffect, useState } from "react"
import "./../styles/style.scss"
import constants from "../state/constants"
import store from "../state/store"
import App from "../components/App"
import { graphql } from "gatsby"
import dispatchFullContent from "./../state/actions/dispatchFullContent"
import Loading from "./../components/Loading"

export default ({ data }: any) => {
  const [loading, setLoading] = useState(true)

  const updateDimensions: () => any = () => {
    const { setNav }: { setNav: { name: string } } = constants
    const {
      innerHeight,
      innerWidth,
    }: { innerHeight: number; innerWidth: number } = window
    store.dispatch({
      type: setNav.name,
      payload: { innerWidth, innerHeight, isMobile: !!(innerWidth < 768) },
    })
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
  })

  useEffect(() => {
    if (loading) {
      dispatchFullContent({ api: data.API, md: data.allMarkdownRemark.edges })
      setLoading(false)
    }
  }, [])

  return !loading ? <App /> : <Loading />
}

export const query = graphql`
  query HomeData {
    API {
      header {
        name
        subtitle
        title
      }
      about {
        skills {
          title
          nodes {
            group
            id
          }
          links {
            source
            target
            value
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
