import React from "react"
import { Row } from "react-bootstrap"
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"

export default () => {
  return (
    <Row>
      <a
        href="https://www.linkedin.com/in/pierre-alexis-blond-00924b158/"
        target="blank"
        style={{ color: "#0077B5" }}
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://github.com/PABlond"
        target="blank"
        style={{
          color: "#211F1F",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        <FaGithubSquare size={32} />
      </a>
      <a
        href="https://twitter.com/_pablond"
        target="blank"
        style={{ color: "#55acee" }}
      >
        <FaTwitterSquare size={32} />
      </a>
    </Row>
  )
}
