import React, { useEffect, useState } from "react"
import queryString from "query-string"
import SetWorks from "./../../../components/Works/SetWorks"
import SetAbout from "./../../../components/About/SetAbout"
import SetHeader from './../../../components/Header/setHeader'
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, setUser } from "./../../../services/auth"
import Head from "./../../../components/Head"
import getFullContent from "./../../../services/getFullContent"
import dispatchFullContent from "./../../../state/actions/dispatchFullContent"

export default ({ location }) => {
  const requestedModule = queryString.parse(location.search)
  const [isLoading, setLoading] = useState(
    Object.keys(requestedModule).length ? true : false
  )
  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    if (Object.keys(requestedModule).length && isLoading) {
      ;(async () => {
        dispatchFullContent(await getFullContent())
        setLoading(false)
      })()
    }
  })
  return (
    <div>
      <Head />
      <h1>Hi from the second page</h1>
      <a href="/dashboard/modules/?module=header">Header</a>
      <a href="/dashboard/modules/?module=about">About</a>
      <a href="/dashboard/modules/?module=works">Works</a>

      <div>
        {Object.values(requestedModule) == "works" && !isLoading ? (
          <SetWorks />
        ) : null}
        {Object.values(requestedModule) == "about" && !isLoading ? (
          <SetAbout />
        ) : null}
        {Object.values(requestedModule) == "header" && !isLoading ? (
          <SetHeader />
        ) : null}
      </div>
    </div>
  )
}
