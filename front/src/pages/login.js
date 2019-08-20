import React, { useState, useEffect } from "react"
import { Container, Row, Form, Button } from "react-bootstrap"
import store from "./../state/store"
import { login as loginStyle } from "./../styles/login"
import { navigate } from "gatsby"
import { isLoggedIn, setUser } from "./../services/auth"
import axios from "axios"
import constants from "./../state/constants"
export default () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (isLoggedIn()) return navigate(`/dashboard`)
  })

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { username, password } = values
    const response = await axios.get(`https://fir-fiverr-a2e6b.appspot.com/graphql?query={
        login (username: "${username}", password: "${password}")
      }`)
    if (response.status === 200) {
      const { login } = constants
      setUser({ token: response.data.data.login })
      store.dispatch({
        type: login.name,
        payload: { token: response.data.data.login },
      })
      setIsLogged(true)
    }
  }

  const { width, height } = store.getState().nav
  const style = loginStyle({ width, height })

  return (
    <Container style={style.container}>
      <Row style={style.row}>
        <Form onSubmit={handleSubmit}>
          <h1 style={style.h1}>Login page</h1>
          <Form.Group controlId="formBasicusername">
            <Form.Label>username address</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              value={values.username}
            />
            <Form.Text className="text-muted">
              We'll never share your username with anyone else.
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
