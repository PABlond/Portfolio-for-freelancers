import React from "react"
import Skills from "./Skills"
import { Container, Col, Row } from "react-bootstrap"
import store from "./../../state/store"
import { about as aboutStyle } from "./../../styles/style"
import { IAbout, IDescription } from "../../interfaces/about.interface"

export default () => {
  const props = store.getState()
  const { about }: { about: IAbout } = props.content
  const { width, height }: { width: number; height: number } = props.nav
  const style = aboutStyle({ width, height })
  return (
    <Container fluid={true} id="about" style={style.mainContainer}>
      <Row
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
          {about.description.map((desc: IDescription, i: number) => (
            <p
              key={i}
              className="text-center"
              dangerouslySetInnerHTML={{ __html: desc.content }}
            />
          ))}
        </div>
      </Row>
      <Skills />
    </Container>
  )
}
