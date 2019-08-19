import React from "react"
import Skills from "./../Skills"
import pageStructure from "../App/pageStructure"
import { Container, Col } from "react-bootstrap"
import store from "./../../state/store"
import { about as aboutStyle } from "./../../styles/style"

export default ({ content }) => {
  const props = store.getState()
  const { about } = props.content
  const { width, height } = props.nav
  const style = aboutStyle({ width, height })
  return (
    <Container fluid={true} id="about">
      <Container
        style={style.container}
        className="justify-content-center align-items-center flex-columns"
      >
        <Col md={3} style={style.col}>
          <img
            src={about.img.href}
            alt={about.img.alt}
            className="img-fluid rounded-circle"
            style={style.img}
          />
        </Col>
        <div>
          {about.description.map(desc => (
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: desc.content }}
            />
          ))}
        </div>
      </Container>
      <Skills />
    </Container>
  )
}
