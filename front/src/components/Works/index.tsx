import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import store from "./../../state/store"
import { IWork } from "../../interfaces/works.interface"

export default () => {
  const props = store.getState()
  const { works }: { works: IWork[] } = props.content
  const { height, width }: { height: number; width: number } = props.nav
  const imgStyle = { maxHeight: 200 }
  return (
    <Container fluid={true} id="works">
      <h2>Previous Work</h2>
      <Container>
        <Row>
          {works.map((work: IWork, i: number) =>
            i < 8 ? (
              <Col md={3} key={i}>
                <div className="m-3">
                  <h4>{work.title}</h4>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fluid
                    style={imgStyle}
                  />
                  <p>{work.content}</p>
                  <p className="technos">{work.technos}</p>
                </div>
              </Col>
            ) : null
          )}
        </Row>
      </Container>
      <div>
        <h4>
          More Project on <a href="https://github.com/PABlond">Github</a> (18
          public repositories)
        </h4>
      </div>
    </Container>
  )
}
