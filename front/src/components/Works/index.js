import React from "react"
import pageStructure from "../App/pageStructure"
import { Container, Row, Col, Image } from "react-bootstrap"
import store from "./../../state/store"

export default ({ content }) => {
  const props = store.getState()
  const { works } = props.content
  const { height } = props.nav
  const imgStyle = { maxHeight: height / 6 }
  return (
    <Container
      fluid={true}
      style={{ height: "100vh" }}
      id={pageStructure[content.n].id}
    >
      <div dangerouslySetInnerHTML={content} />
      <Row>
        {works.map((work, i) =>
          i < 6 ? (
            <Col md={4} key={i}>
              <div className="p-3">
                <h4>{work.title}</h4>
                <Image src={work.image} alt={work.alt} fluid style={imgStyle} />
                <p>{work.content}</p>
                <p className="technos">{work.technos}</p>
              </div>
            </Col>
          ) : null
        )}
      </Row>
      <div>
        <h4>More Project</h4>
        {works.map((work, i) =>
          i >= 6 ? (
            <a key={i} href="/#">
              {work.title}
            </a>
          ) : null
        )}
      </div>
    </Container>
  )
}
