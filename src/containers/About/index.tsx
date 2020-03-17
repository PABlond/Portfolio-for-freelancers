import React from "react"
import Bio from "./Bio"
import Skills from "../Skills"
import { Container, Row, Col } from "react-bootstrap"

export default () => {
  return (
    <section id="about">
      <Container>
        <Bio />

        <Row>
          <Col md={10}>
            <Skills />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
