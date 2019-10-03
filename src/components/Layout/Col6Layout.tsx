import React from "react"
import { Container, Row } from "react-bootstrap"

export default ({ children }: any) => (
  <Container fluid>
    <Row id="about-bottom">{children}</Row>
  </Container>
)
