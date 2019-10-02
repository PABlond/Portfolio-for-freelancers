import React, { useEffect, useState } from "react"
// import constants from "../state/constants"
// import store from "../state/store"
import App from "../components/App"
import { graphql } from "gatsby"
// import dispatchFullContent from "./../state/actions/dispatchFullContent"
// import Loading from "./../components/Loading"
import { connect } from "react-redux"
import { dispatchContent } from "./../config/constants"
import {Container, Row, Col} from 'react-bootstrap'
import Header from "./../components/Header"
import About from './../components/About'
import Skills from './../components/Skills'

const Home = ({ data, dispatchFullContent }) => {
  useEffect(() => {
    const header = data.allMarkdownRemark.edges
      .map(
        mod => (mod.node.frontmatter.title == "header" ? mod.node.html : null)
      )
      .filter(Boolean)[0]
    console.log(data)
    const about = data.allMarkdownRemark.edges.map(mod => {
      return (mod.node.frontmatter.title == "about" ? mod.node.html : null)
    }).filter(Boolean)[0]
    dispatchFullContent({ header, about })
  }, [])
  return (
    <>
      <Header />
      <section id="about">
      <About />
      <Container fluid>
        <Row>
          <Col md={6} id="skills">
            <Skills />
          </Col>
          <Col md={6}>
            <p>Certifications</p>
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
  }
`

const mapDispatchToProps = dispatch => ({
  dispatchFullContent: payload => dispatch({ type: dispatchContent, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
