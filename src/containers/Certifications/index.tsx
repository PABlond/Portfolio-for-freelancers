import React from "react"
import { Container } from "react-bootstrap"
import CertificationsImgs from "../../components/StaticQuery/CertificationsImgs"
import Caroussel from "./Caroussel"

export default () => {
  return (
    <section id="certifications">
      <Container fluid>
        <h3 className="text-center">Certifications</h3>
        <CertificationsImgs container={Caroussel} />
      </Container>
    </section>
  )
}
