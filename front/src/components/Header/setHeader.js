import React, { useState, useEffect } from "react"
import store from "./../../state/store"
import { Container, Row, Button, Form } from "react-bootstrap"
import setHeader from "./../../services/setHeader"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"

export default () => {
  const props = store.getState()
  const { header } = props.content
  const [headerState, setHeaderState] = useState(header)

  useEffect(() => {
    const { about, works, certifications } = props.content
    dispatchFullContent({ works, certifications, header: headerState, about })
  }, [headerState])

  const updateHeader = e =>
    setHeaderState({
      ...headerState,
      [e.target.name]: e.target.value,
    })

  const onSubmit = async e => {
    e.preventDefault()
    const { name, title, subtitle } = headerState
    await setHeader({ name, title, subtitle })
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={headerState.name}
            onChange={updateHeader}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={headerState.title}
            onChange={updateHeader}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subtitle"
            value={headerState.subtitle}
            onChange={updateHeader}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
