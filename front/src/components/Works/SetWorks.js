import React, { useState, useEffect } from "react"
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap"
import store from "./../../state/store"
import { works as worksStyle } from "./../../styles/style"
import setWorks from "./../../services/setWorks"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"

export default ({ content }) => {
  const props = store.getState()
  const { works } = props.content
  const { height, width } = props.nav
  const style = worksStyle({ height, width })
  const imgStyle = { maxHeight: height / 7 }

  const [worksState, setWorksState] = useState(works)
  const [show, setShow] = useState({ value: false, work: works[0], i: 0 })

  useEffect(() => {
    const { about, header, certifications } = props.content
    const works = worksState
    dispatchFullContent({ works, certifications, header, about })
  }, [worksState])

  const editWorks = async (content, i) => {
    const newWorks = await setWorks(
      worksState.map((work, j) => (i !== j ? work : content))
    )

    setWorksState(newWorks)
    handleClose()
  }

  const handleClose = () => setShow({ ...show, value: false })
  return (
    <Container fluid={true} style={style.container} id="works">
      <h2 style={style.h2}>Previous Work</h2>
      <Container>
        <Row style={style.row}>
          {worksState.map((work, i) =>
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
                  <button onClick={() => setShow({ value: true, work, i })}>
                    Change
                  </button>
                </div>
              </Col>
            ) : null
          )}
        </Row>
      </Container>
      <div>
        <h4>More Project on Github</h4>
      </div>
      <EditWorks editWorks={editWorks} show={show} handleClose={handleClose} />
    </Container>
  )
}

const EditWorks = ({ show, handleClose, editWorks }) => {
  const [work, setWork] = useState(show.work)

  useEffect(() => {
    setWork(show.work)
  }, [show.work])

  const updateWork = e =>
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    })

  return (
    <Modal show={show.value} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <span>Title: </span>
          <input
            type="text"
            name="title"
            value={work.title}
            onChange={updateWork}
          />
        </div>
        <div>
          <span>Image: </span>
          <input
            type="text"
            name="image"
            value={work.image}
            onChange={updateWork}
          />
        </div>
        <div>
          <span>Content: </span>
          <textarea name="content" value={work.content} onChange={updateWork} />
        </div>
        <div>
          <span>Technos: </span>
          <input
            type="text"
            name="technos"
            value={work.technos}
            onChange={updateWork}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => editWorks(work, show.i)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
