import React, { useState, useEffect } from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import getUnreadMessage from "./../../services/getUnreadMessage"
import getContacts from "./../../services/getContacts"

export default () => {
  const [unReadMessage, setUnread] = useState(0)

  useEffect(() => {
    ;(async () => setUnread(getUnreadMessage(await getContacts())))()
  }, [])

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/dashboard">PABlond</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/dashboard/resume">Resume</Nav.Link>
        <NavDropdown title="Modules" id="nav-dropdown">
          <NavDropdown.Item href="/dashboard/modules/?module=header">
            Header
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/modules/?module=about">
            About action
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/modules/?module=works">
            Works
          </NavDropdown.Item>
          <NavDropdown.Item href="/dashboard/modules/?module=contacts">
            Contacts{" "}
            {unReadMessage > 0 ? (
              <span className="bg-danger text-light rounded-circle p-2">
                {unReadMessage}
              </span>
            ) : null}
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}
