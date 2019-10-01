import React from "react"
import Skills from "./Skills"
import { Container, Col, Row } from "react-bootstrap"
import store from "./../../state/store"
import { IAbout, IDescription } from "../../interfaces/about.interface"
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"

export default () => {
  const props = store.getState()
  const { about }: { about: IAbout } = props.content

  return (
    <Container fluid={true} id="about">
      <div
        id="about-top"
        className="justify-content-center align-items-center flex-columns"
      >
        <div id="about-img">
          <img
            src={about.img.href}
            alt={about.img.alt}
            className="img-fluid rounded-circle"
          />
        </div>
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
              <FaLinkedinIn
                size="1.5em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
            <a href="https://twitter.com/_pablond" target="_blank">
              <FaTwitter
                size="1.5em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
            <a href="https://github.com/PABlond" target="_blank">
              <FaGithub
                size="1.5em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </Container>
  )
}
