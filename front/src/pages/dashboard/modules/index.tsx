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
import {Container} from 'react-bootstrap'

export default ({ location }: any) => {
  const requestedModule: string = Object.values(queryString.parse(location.search))[0] as string
  const [isLoading, setLoading] = useState<boolean>(!!requestedModule.length)

  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    if (requestedModule.length && isLoading) {
      ; (async () => {
        dispatchFullContent({
          ...(await getFullContent()),
          ...(await getContacts()),
        })
        setLoading(false)
      })()
    }
  }, [])
  return (
    <Container fluid>
      <Head />
      <AdminNav />
      <Container>
        {requestedModule === "works" && !isLoading ? (
          <SetWorks />
        ) : null}
        {requestedModule === "about" && !isLoading ? (
          <SetAbout />
        ) : null}
        {requestedModule === "header" && !isLoading ? (
          <SetHeader />
        ) : null}
        {requestedModule === "contacts" && !isLoading ? (
          <GetContacts />
        ) : null}
      </Container>
    </Container>
  )
}
