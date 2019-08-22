import React, { useEffect, useState } from "react"
import AdminNav from "./../../../components/Nav/AdminNav"
import getFullContent from "./../../../services/getFullContent"
import { PDFViewer } from "@react-pdf/renderer"
import { Container } from "react-bootstrap"
import dispatchFullContent from "./../../../state/actions/dispatchFullContent"
import { isLoggedIn } from "./../../../services/auth"
import getContacts from "./../../../services/getContacts"
import Resume from "../../../components/Resume"
import Loading from "./../../../components/Loading"
import { navigate } from "gatsby"

export default () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoggedIn()) return navigate(`/login`)
    ;(async () => {
      dispatchFullContent({
        ...(await getFullContent()),
        ...(await getContacts()),
      })
      setLoading(false)
    })()
  }, [])
  return (
    <Container fluid>
      <AdminNav />
      {loading ? (
        <Loading />
      ) : (
        <PDFViewer style={{ height: "100vh", width: "100%" }}>
          <Resume />
        </PDFViewer>
      )}
    </Container>
  )
}
