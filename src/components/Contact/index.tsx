import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default ({ hidden }: { hidden: Boolean }) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    content: "",
  })

  const [response, setResponse] = useState<{
    status: Boolean
    content: string | undefined
  }>({ status: false, content: undefined })

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    }).catch((error: Error) => {
      console.log(error)
      setResponse({
        status: false,
        content:
          "An error occured, please send an email to pierre-alexis.blond@live.fr",
      })
    })
    setResponse({
      status: true,
      content: "Your message has been sent. I will contact you soon !",
    })
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
    <Container fluid hidden={!!hidden}>
      <h1>Want to hire me ?</h1>
      <Form
        data-netlify="true"
        onSubmit={onSubmit}
        className="offset-md-3 col-md-6"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={updateField} />
          </label>
        </div>
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
        <Button block type="submit" id="contact-button" variant="danger">
          SUBMIT
        </Button>
        {response.content && (
          <p
            className={`text-center ${
              response.status ? "text-info" : "text-danger"
            }`}
          >
            {response.content}
          </p>
        )}
      </Form>
    </Container>
  )
}
