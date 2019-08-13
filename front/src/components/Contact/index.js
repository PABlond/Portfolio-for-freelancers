import React, { useState } from "react"
import axios from "axios"
import store from "./../../state/store"
import { Container, Form, Button, ButtonToolbar } from "react-bootstrap"
import { contact as contactStyle } from "./../../styles/style"

export default ({ content }) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    content: "",
  })
  const [APIRes, setAPIRes] = useState({
    isError: false,
    content: "",
  })

  const handleClick = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:1337/api/contact",
        form
      )

      setAPIRes({
        isError: false,
        content: "An error occured. Feel free to contact me directly",
      })
    } catch (error) {
      console.error(error)
      setAPIRes({
        isError: true,
        content: "An error occured. Feel free to contact me directly",
      })
    }
  }

  const updateField = e =>
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })

  const { width, height } = store.getState().nav
  const style = contactStyle({ width, height })

  return (
    <Container fluid style={style.container}>
      <h1 style={style.h1}>Want to hire me ?</h1>
      <Form style={style.form}>
        <Form.Group style={style.group}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group style={style.group}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="John Doe" />
        </Form.Group>
        <Form.Group style={style.group}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <ButtonToolbar>
          <Button id='contact-button' variant="danger" style={style.submit }>
            SUBMIT
          </Button>
        </ButtonToolbar>
      </Form>
    </Container>
  )
}
