import React, { useEffect, useState } from "react"
import queryString from "query-string"
import SetWorks from "./../../../components/Works/SetWorks"
import SetAbout from "./../../../components/About/SetAbout"
import SetHeader from "./../../../components/Header/setHeader"
import GetContacts from "./../../../components/Contact/getContacts"
import { navigate } from "gatsby"
import { isLoggedIn } from "./../../../services/auth"
import Head from "./../../../components/Head"
import AdminNav from "./../../../components/Nav/AdminNav"
import getFullContent from "./../../../services/getFullContent"
import dispatchFullContent from "./../../../state/actions/dispatchFullContent"
import getContacts from "./../../../services/getContacts"

export default ({ location }) => {
  const requestedModule = queryString.parse(location.search)
  const [isLoading, setLoading] = useState(
    Object.keys(requestedModule).length ? true : false
  )
  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    if (Object.keys(requestedModule).length && isLoading) {
      ;(async () => {
        dispatchFullContent({
          ...(await getFullContent()),
          ...(await getContacts()),
        })
        setLoading(false)
      })()
    }
  })
  return (
    <div>
      <Head />
      <AdminNav />
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
        {Object.values(requestedModule) == "contacts" && !isLoading ? (
          <GetContacts />
        ) : null}
      </div>
    </div>
  )
}
