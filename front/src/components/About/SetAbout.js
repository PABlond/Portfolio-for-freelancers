import React, { useState, useEffect } from "react"
import { Container, Form, Button, Row, Modal } from "react-bootstrap"
import store from "./../../state/store"
import setDescription from "./../../services/setDescription"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

export default ({ content }) => {
  const props = store.getState()
  let { about } = props.content
  const [descStr, setdescStr] = useState("")
  const [aboutState, setAbout] = useState(about)
  const [show, setShow] = useState({ value: false, str: "", i: 0 })

  useEffect(() => {
    const { works, header, certifications } = props.content
    const about = aboutState
    dispatchFullContent({ works, certifications, header, about })
  }, [aboutState])

  const deleteDescSentence = async i => {
    const description = await setDescription(
      aboutState.description
        .map((desc, j) => (i !== j ? desc : null))
        .filter(Boolean)
    )

    setAbout({
      ...aboutState,
      description,
    })
  }
  const onSubmit = async () => {
    const description = await setDescription([
      ...aboutState.description,
      { content: descStr },
    ])
    setAbout({
      ...aboutState,
      description,
    })
  }

  const editDescStr = async (content, i) => {
    const description = await setDescription(
      aboutState.description.map((desc, j) => (i !== j ? desc : { content }))
    )
    setAbout({
      ...aboutState,
      description,
    })
    handleClose()
  }

  const handleClose = () => setShow({ ...show, value: false })

  const updatedescStr = e => setdescStr(e.target.value)

  return (
    <Container className="mt-5 p-5">
      <Row className="d-block">
        {aboutState.description.map((desc, i) => (
          <div key={i}>
            <p className="text-center">
              {desc.content}
              <span
                onClick={() => setShow({ value: true, str: desc.content, i })}
                className="ml-2"
              >
                <FontAwesomeIcon icon={faEdit} />
              </span>{" "}
              <span onClick={() => deleteDescSentence(i)} className="ml-2">
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
            </p>
          </div>
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
            value={descStr}
            onChange={updatedescStr}
          />
        </Form.Group>
        <Button block onClick={onSubmit} id="contact-button" variant="danger">
          SUBMIT
        </Button>
      </Form>

      <EditDescStr
        editDescStr={editDescStr}
        show={show}
        handleClose={handleClose}
      />
    </Container>
  )
}

const EditDescStr = ({ show, handleClose, editDescStr }) => {
  const [str, setStr] = useState("")

  useEffect(() => {
    setStr(show.str)
  }, [show.str])

  return (
    <Modal show={show.value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" value={str} onChange={e => setStr(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => editDescStr(str, show.i)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
