import React from "react"
import { Container, Row } from "react-bootstrap"
import { connect } from "react-redux"

const Works = ({ works }: any) => {
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
