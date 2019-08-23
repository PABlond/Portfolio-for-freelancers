import React, { useState, useEffect } from "react"
import { Container, Row, Image, Modal, Button } from "react-bootstrap"
import store from "./../../state/store"
import { works as worksStyle } from "./../../styles/style"
import setWorks from "./../../services/setWorks"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import { IWork, IShowEdit } from "../../interfaces/works.interface"
import DragSortableList from "react-drag-sortable"

export default () => {
  const props = store.getState()
  const { works }: { works: IWork[] } = props.content
  const { height, width } = props.nav
  const style = worksStyle({ height, width })
  const imgStyle = { maxHeight: height / 7 }

  const [worksState, setWorksState] = useState<IWork[]>(works)
  const [show, setShow] = useState<IShowEdit>({
    value: false,
    work: works[0],
    i: 0,
  })

  useEffect(() => {
    const { about, header } = props.content
    dispatchFullContent({ works: worksState, header, about })
  }, [worksState])

  const editWorks: (content: IWork, i: number) => any = async (content, i) => {
    setWorksState(
      await setWorks(
        worksState.map((work: any, j: number) => (i !== j ? work : content))
      )
    )
    handleClose()
  }

  const dragableList = worksState
    .map((work: any, i: number) =>
      i < 8
        ? {
            content: (
              <div key={i} className="m-3" style={style.col}>
                <h4>{work.title}</h4>
                <Image src={work.image} alt={work.alt} fluid style={imgStyle} />
                <p>{work.content}</p>
                <p className="technos">{work.technos}</p>
                <Button id="contact-button" onClick={() => setShow({ value: true, work, i })}>
                  Edit
                </Button>
              </div>
            ),
            classes: ["border"],
          }
        : null
    )
    .filter(Boolean)

  var onSort = async (sortedList: {id: string}[]) => {
    await setWorks(
      sortedList.map((i:{id: string}, position: number) => ({
        ...worksState[parseInt(i.id) - 2],
        position,
      }))
    )
  }

  const handleClose = () => setShow({ ...show, value: false })
  return (
    <Container fluid={true} style={style.container} id="works">
      <h2 style={style.h2}>Previous Work</h2>
      <Container>
        <Row style={style.row}>
          <DragSortableList
            items={dragableList}
            dropBackTransitionDuration={0.3}
            onSort={onSort}
            type="vertical"
          />
        </Row>
      </Container>
      <EditWorks editWorks={editWorks} show={show} handleClose={handleClose} />
    </Container>
  )
}

const EditWorks = ({
  show,
  handleClose,
  editWorks,
}: {
  show: IShowEdit
  handleClose: () => void
  editWorks: (work: IWork, i: number) => any
}) => {
  const [work, setWork] = useState<IWork>(show.work)

  useEffect(() => {
    setWork(show.work)
  }, [show.work])

  const updateWork: (e: any) => void = e =>
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
