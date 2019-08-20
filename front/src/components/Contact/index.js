import React, { useState } from "react"
import store from "./../../state/store"
import { Container, Form, Button } from "react-bootstrap"
import { contact as contactStyle } from "./../../styles/style"
import sendMessage from './../../services/sendMessage'

export default ({ content }) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    content: "",
  })
  
  const onSubmit = async e => {
    e.preventDefault()
    const response = await sendMessage(form)
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
      <Form style={style.form} onSubmit={onSubmit}>
        <Form.Group style={style.group}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={updateField}
          />
        </Form.Group>
        <Form.Group style={style.group}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={updateField}
          />
        </Form.Group>
        <Form.Group style={style.group}>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            rows="3"
            value={form.content}
            onChange={updateField}
          />
        </Form.Group>
         <Button type="submit" id="contact-button" variant="danger" style={style.submit}>
            SUBMIT
          </Button>
      </Form>
    </Container>
  )
}
