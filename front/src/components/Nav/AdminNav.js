import React, {useState, useEffect} from "react"
import { Nav, Navbar } from "react-bootstrap"
import getUnreadMessage from "./../../services/getUnreadMessage"

export default () => {
    const [unReadMessage, setUnread] = useState(0)
    useEffect(() => setUnread(getUnreadMessage()))
    
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">PABlond</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/dashboard/modules/?module=header">Header</Nav.Link>
        <Nav.Link href="/dashboard/modules/?module=about">About</Nav.Link>
        <Nav.Link href="/dashboard/modules/?module=works">Works</Nav.Link>
        <Nav.Link href="/dashboard/modules/?module=contacts">Contacts{" "}
        {unReadMessage > 0 ? (
          <span className="bg-danger text-light rounded-circle p-2">{unReadMessage}</span>
        ) : null}</Nav.Link>
      </Nav>
    </Navbar>
  )
}
