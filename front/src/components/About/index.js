import React from "react"
import Skills from "./../Skills"
import pageStructure from "../App/pageStructure"
import { Container, Col } from "react-bootstrap"
import store from "./../../state/store"
import {about as aboutStyle} from './../../styles/style'

export default ({ content }) => {
  const { width, height } = store.getState().nav
  console.log('width', width)
  const style = aboutStyle({ width, height })
  return (
    <Container fluid={true} id={pageStructure[content.n].id}>
      <Container
        style={style.container }
        className="justify-content-center align-items-center flex-columns"
      >
        <Col md={3} style={style.col}>
          <img
            src="https://res.cloudinary.com/pablond/image/upload/q_auto:eco/v1529395706/20180619_095724.jpg"
            alt="pierre-alexis_blond"
            className="img-fluid rounded-circle"
            style={style.img}
          />
        </Col>
        <div dangerouslySetInnerHTML={content} />
      </Container>
      <Skills />
    </Container>
  )
}
