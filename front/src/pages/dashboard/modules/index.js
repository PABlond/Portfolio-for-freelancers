import React, { useEffect, useState } from "react"
import queryString from "query-string"
import store from "./../../../state/store"
import axios from "axios"
import constants from "./../../../state/constants"
import SetWorks from "./../../../components/Works/SetWorks"
import SetAbout from "./../../../components/About/SetAbout"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, setUser } from "./../../../services/auth"
import Head from './../../../components/Head'
export default ({ location }) => {
  const requestedModule = queryString.parse(location.search)
  const props = store.getState()
  const [isLoading, setLoading] = useState(
    Object.keys(requestedModule).length ? true : false
  )
  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/dashboard`)
    if (Object.keys(requestedModule).length && isLoading) {
      ;(async () => {
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
        setLoading(false)
      })()
    }
  })
  return (
    <div>
      <Head />
      <h1>Hi from the second page</h1>
      <a href="/dashboard/modules/?module=about">About</a>
      <a href="/dashboard/modules/?module=works">Works</a>

      <div>
        {Object.values(requestedModule) == "works" ? <SetWorks /> : null}
        {Object.values(requestedModule) == "about" && !isLoading ? (
          <SetAbout />
        ) : null}
      </div>
    </div>
  )
}
