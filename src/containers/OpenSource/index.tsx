import React from "react"
import { Container, Row } from "react-bootstrap"
import OpenSourceImgs from '../../components/StaticQuery/OpenSourceImgs'
import Projects from './Projects'

export default () => {
  return (
    <section id="open-source">
      <h3>Open Source</h3>

      <Container>
      <OpenSourceImgs container={Projects} />
        <Row>
          <h4 id="more">
            More Project on <a href="https://github.com/PABlond">Github</a>{" "}
            (more than 30 public repositories)
          </h4>
        </Row>
      </Container>
    </section>
  )
}
