import React, { useState } from "react"
import { Container, Row, Form, Button } from "react-bootstrap"
import store from "./../state/store"
import { login as loginStyle } from "./../styles/login"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "./../services/auth"

export default () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = event => {
    event.persist()
    console.log(values)
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const { width, height } = store.getState().nav
  const style = loginStyle({ width, height })

  if (isLoggedIn()) {
    navigate(`/dashboard`)
  }
  return (
    <Container style={style.container}>
      <Row style={style.row}>
        <Form>
          <h1 style={style.h1}>Login page</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </Row>
    </Container>
  )
}
