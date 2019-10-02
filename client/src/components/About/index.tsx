import React from "react"
import { connect } from "react-redux"
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"

const About = ({ about }) => {
  return <> 
    <div className="container-fluid" dangerouslySetInnerHTML={{ __html: about }} />
    <div className="d-flex align-items-center mt-1 mb-1 justify-content-center">
            <a
              href="https://www.linkedin.com/in/pierre-alexis-blond-00924b158/"
              target="_blank"
            >
              <FaLinkedinIn
                size="2em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
            <a href="https://twitter.com/_pablond" target="_blank">
              <FaTwitter
                size="2em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
            <a href="https://github.com/PABlond" target="_blank">
              <FaGithub
                size="2em"
                color="#212529"
                className="fa-2x ml-1 p-1 pr-2 pl-2"
              />
            </a>
          </div>
          </>
}

const mapStateToProps = (state: any) => {
  const { about } = state.content
  return {
    about,
  }
}

export default connect(mapStateToProps)(About)
