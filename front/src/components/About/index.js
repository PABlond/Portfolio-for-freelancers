import React from "react"
import Skills from "./../Skills"
import pageStructure from "../App/pageStructure"
import { Container } from "react-bootstrap"

export default ({ content, certifications }) => {
  return (
    <Container
      fluid={true}
      id={pageStructure[content.n].id}
    >
      <div
        style={{ height: "50vh" }}
        className="w-100 d-flex justify-content-center align-items-center flex-columns"
      >
        <div dangerouslySetInnerHTML={content} />
      </div>
      <Skills certifications={certifications} />
    </Container>
  )
}
