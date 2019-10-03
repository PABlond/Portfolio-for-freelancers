import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import NetlifyForm from "react-netlify-form"

export default () => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    content: "",
  })

  const onSubmit = (e: any) => {
    e.preventDefault()
    setValues({
      email: "",
      name: "",
      content: "",
    })
  }

  const updateField = (e: any) =>
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })

  return (
    <Container fluid>
      <h1>Want to hire me ?</h1>
      <NetlifyForm
        name="Form With Recaptcha"
        recaptcha={{
          sitekey: "6Le9tbsUAAAAAB0vewi1XAF9aTG1vd6QYmTO7OxP",
          size: "normal",
        }}
      >
        {({ loading, error, recaptchaError, success, recaptcha }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div>Your information was not sent. Please try again later.</div>
            )}
            {recaptchaError && (
              <div>
                Recaptcha did not match. Please make sure the box is checked.
              </div>
            )}
            {success && <div>Thank you for contacting us!</div>}
            {!loading && !success && (
              <>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={updateField}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={updateField}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="content"
                    rows="3"
                    value={form.content}
                    onChange={updateField}
                  />
                </Form.Group>
                {recaptcha}
                <Button
                  block
                  type="submit"
                  id="contact-button"
                  variant="danger"
                >
                  SUBMIT
                </Button>
              </>
            )}
          </div>
        )}
      </NetlifyForm>
    </Container>
  )
}
