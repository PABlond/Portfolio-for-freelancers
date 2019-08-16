import React, { useState, useEffect } from "react"
import SetSkills from "./../Skills/SetSkills"
import pageStructure from "../App/pageStructure"
import { Container, Form, Button, Row } from "react-bootstrap"
import store from "./../../state/store"
import { about as aboutStyle } from "./../../styles/style"
import axios from "axios"
import constants from "./../../state/constants"

export default ({ content }) => {
  const props = store.getState()
  let { works, certifications, header, about } = props.content
  const { width, height } = props.nav
  const style = aboutStyle({ width, height })
  const [description, setValues] = useState("")
  const [aboutState, setAbout] = useState(about)

  useEffect(() => {
    const { getContent } = constants
    store.dispatch({
      type: getContent.name,
      payload: {
        works,
        certifications,
        header,
        about: { ...about, description: aboutState.description },
      },
    })
  })

  const deleteDescSentence = async i => {
    const newDescription = aboutState.description
      .map((desc, j) => (i !== j ? aboutState.description[j] : null))
      .filter(Boolean)
    setAbout({ ...aboutState, description: newDescription })

    await setDescription(newDescription)
  }
  const onSubmit = async () => {
    if (description.length)
      setAbout({
        ...aboutState,
        description: [...aboutState.description, { content: description }],
      })
    setValues("")

    await setDescription([...aboutState.description, { content: description }])
  }

  const setDescription = async desc => {
    const query = JSON.stringify(desc.map(desc => desc.content))
    const response = await axios.get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={setAboutDesc(about: ${query})}`
    )
    console.log(response)
  }

  const updateField = e => setValues(e.target.value)
  return (
    <Container>
      <Row>
        {aboutState.description.map((desc, i) => (
          <p key={i} className="text-center">
            {desc.content} <span onClick={() => deleteDescSentence(i)}>X</span>
          </p>
        ))}
      </Row>
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="3"
            style={{
              width: "100%",
            }}
            value={description}
            onChange={updateField}
          />
        </Form.Group>
        <Button onClick={onSubmit} id="contact-button" variant="danger">
          SUBMIT
        </Button>
      </Form>
      <SetSkills />
    </Container>
  )
}
