import React, { useEffect } from "react"
import { navigate } from "gatsby"
import AdminNav from "./../../components/Nav/AdminNav"
import Head from "./../../components/Head"
import getFullContent from "./../../services/getFullContent"
import getContacts from "./../../services/getContacts"
import { isLoggedIn } from "./../../services/auth"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import { Container, Row } from "react-bootstrap"

export default () => {
  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    ;(async () => {
      dispatchFullContent({
        ...(await getFullContent()),
        ...(await getContacts()),
      })
    })()
  }, [])
  return (
    <Container fluid>
      <Head />
      <AdminNav />
      <Container className="mt-5">
        <h2 className="text-danger text-center mb-4">Dashboard</h2>
        <Row className="border p-5"></Row>
      </Container>
    </Container>
  )
}
