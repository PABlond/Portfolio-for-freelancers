import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => (
  <Navbar fixed="top" expand="lg" bg="dark" variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href="#header">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#works">Works</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
