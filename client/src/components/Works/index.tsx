import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { IWork } from "../../interfaces/works.interface"
import { connect } from "react-redux"

const Works = ({ works }) => {
  
  return (
    <Container fluid={true}>
      <h2>Previous Work</h2>
      <Container>
        <Row dangerouslySetInnerHTML={works}></Row>
      </Container>
      <div>
        <h4>
          More Project on <a href="https://github.com/PABlond">Github</a> (more
          than 20 public repositories)
        </h4>
      </div>
    </Container>
  )
}

const mapStateToProps = (state: any) => {
  const { works } = state.content
  return {
    works,
  }
}

export default connect(mapStateToProps)(Works)
