import React from "react"
import { Spinner, Container } from "react-bootstrap"

export default () => (
  <Container
    className="d-flex justify-content-center align-items-center"
    style={{ width: "100%", height: "100vh" }}
  >
    <Spinner animation="grow" style={{ width: "5rem", height: "5rem", color: "#61234e" }} />
  </Container>
)
