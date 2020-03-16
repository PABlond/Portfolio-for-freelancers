import React from "react"
import Bio from "./bio"
import Skills from "../Skills"
import { Container, Row, Col } from "react-bootstrap"

export default () => {
  return (
    <section id="about">
      <Container>
        <Bio />

        <Row className="mt-5">
          <Col md={10}>
            <Skills />
          </Col>
          {/* <Col md={4}></Col> */}
        </Row>
      </Container>
    </section>
  )
}
