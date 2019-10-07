import React from "react"
import { Container, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { IWorks } from "./../../interfaces/module.interface"

const Works = ({ works }: IWorks) => {
  return (
    <Container fluid={true}>
      <h2>Previous Work</h2>
      <Container>
        <Row dangerouslySetInnerHTML={works as { __html: string }}></Row>
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
