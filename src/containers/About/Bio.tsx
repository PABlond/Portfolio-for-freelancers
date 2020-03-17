import React from "react"
import SocialPanel from "../../components/SocialPanel"
import AuthorImg from "../../components/StaticQuery/AuthorImg"
import AuthorPic from "./AuthorPic"
import BioText from "../../components/BioText"
import { Row, Col } from "react-bootstrap"

export default () => {
  return (
    <Row>
      <Col md={4}>
        <AuthorImg container={AuthorPic} />
      </Col>

      <Col md={8}>
        <BioText />
        <SocialPanel />
      </Col>
    </Row>
  )
}
