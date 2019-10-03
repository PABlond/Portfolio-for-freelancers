import React, { useEffect, useState } from "react"
// import constants from "../state/constants"
// import store from "../state/store"
import App from "../components/App"
import { graphql } from "gatsby"
// import dispatchFullContent from "./../state/actions/dispatchFullContent"
// import Loading from "./../components/Loading"
import { connect } from "react-redux"
import { dispatchContent } from "./../config/constants"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./../components/Header"
import About from "./../components/About"
import Skills from "./../components/Skills"
import Certifications from './../components/Certifications'

const Home = ({ data, dispatchFullContent }) => {
  useEffect(() => {
    const header = data.allMarkdownRemark.edges
      .map(mod =>
        mod.node.frontmatter.title == "header" ? mod.node.html : null
      )
      .filter(Boolean)[0]
    console.log(data)
    const about = data.allMarkdownRemark.edges
      .map(mod => {
        return mod.node.frontmatter.title == "about" ? mod.node.html : null
      })
      .filter(Boolean)[0]
    const certifications = data.allFile.edges.map(certification => {
      return certification.node.childImageSharp
    })
    dispatchFullContent({ header, about, certifications })
  }, [])
  return (
    <>
      <Header />
      <section id="about">
        <About />
        <Container fluid>
          <Row id="about-bottom">
            <Col md={6} id="skills">
              <Skills />
            </Col>
            <Col md={6} id="certifications">
              <Certifications />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export const query = graphql`
  query HomeData {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "certifications" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const mapDispatchToProps = dispatch => ({
  dispatchFullContent: payload => dispatch({ type: dispatchContent, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
