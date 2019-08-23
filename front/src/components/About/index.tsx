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
          <div className="d-flex align-items-center mt-1 mb-1 justify-content-center">
            <a
              href="https://www.linkedin.com/in/pierre-alexis-blond-00924b158/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in fa-2x ml-1 p-1 pr-2 pl-2"></i>
            </a>
            <a href="https://twitter.com/_pablond" target="_blank">
              <i className="fab fa-twitter fa-2x ml-1 p-1 pr-2 pl-2"></i>
            </a>
            <a href="https://github.com/PABlond" target="_blank">
              <i className="fab fa-github fa-2x ml-1 mr-1 p-1 pr-2 pl-2"></i>
            </a>
          </div>
        </div>
      </Row>
      <Skills />
    </Container>
  )
}
