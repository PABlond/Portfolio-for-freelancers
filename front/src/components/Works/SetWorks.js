import React, { useState, useEffect } from "react"
import pageStructure from "../App/pageStructure"
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap"
import store from "./../../state/store"
import { works as worksStyle } from "./../../styles/style"
import axios from "axios"
import constants from "./../../state/constants"

export default ({ content }) => {
  const props = store.getState()
  const { works, certifications, header, about } = props.content
  const { height, width } = props.nav
  const style = worksStyle({ height, width })
  const imgStyle = { maxHeight: height / 7 }

  const [show, setShow] = useState(false)
  const [selectI, setI] = useState(0)
  const [selectWork, setSelectWork] = useState(works[0])
  const handleClose = () => setShow(false)
  const handleShow = i => {
    setI(i)
    setSelectWork(works[i])
    setShow(true)
  }

  useEffect(() => {
    const { getContent } = constants
    store.dispatch({
      type: getContent.name,
      payload: {
        works: works.map((work, j) =>
        selectI == j ? selectWork : work
      ),
        certifications,
        header,
        about,
      },
    })
  })

  const handleSave = async () => {
    const newWorks = works.map((work, j) =>
      selectI == j ? JSON.stringify(selectWork) : JSON.stringify(work)
    )
    const query = JSON.stringify(newWorks)
    setShow(false)
    const response = await axios.get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={setWorks(works: ${JSON.stringify(
        newWorks
      )})}`
    )
  }

  const updateField = e => {
    setSelectWork({
      ...selectWork,
      [e.target.name]: e.target.value,
    })
  }
  console.log(selectWork)
  return (
    <Container fluid={true} style={style.container} id="works">
      <h2 style={style.h2}>Previous Work</h2>
      <Container>
        <Row style={style.row}>
          {works.map((work, i) =>
            i < 8 ? (
              <Col md={3} key={i}>
                <div className="m-3" style={style.col}>
                  <h4>{work.title}</h4>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fluid
                    style={imgStyle}
                  />
                  <p>{work.content}</p>
                  <p className="technos">{work.technos}</p>
                  <button onClick={() => handleShow(i)}>Change</button>
                </div>
              </Col>
            ) : null
          )}
        </Row>
      </Container>
      <div>
        <h4>More Project on Github</h4>
      </div>
      {Object.keys(selectWork || []).length ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Title:{" "}
            <input
              type="text"
              name="title"
              value={selectWork.title}
              onChange={updateField}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </Container>
  )
}
