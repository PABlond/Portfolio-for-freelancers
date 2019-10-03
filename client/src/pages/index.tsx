import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { dispatchContent } from "./../config/constants"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./../components/Header"
import About from "./../components/About"
import Skills from "./../components/Skills"
import Certifications from "./../components/Certifications"
import Works from "./../components/Works"
import Contact from "./../components/Contact"
import Loading from "./../components/Loading"
import { IMdNode, IImageQuery } from "./../interfaces/query.interface"
import { IState } from "./../interfaces/state.interface"

const Home = ({ data, dispatchFullContent }: any) => {
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    const header = {
      __html: data.allMarkdownRemark.edges
        .map((mod: IMdNode) =>
          mod.node.frontmatter.title == "header" ? mod.node.html : null
        )
        .filter(Boolean)[0],
    }
    const about = {
      __html: data.allMarkdownRemark.edges
        .map((mod: IMdNode) =>
          mod.node.frontmatter.title == "about" ? mod.node.html : null
        )
        .filter(Boolean)[0],
    }
    const works = {
      __html: data.allMarkdownRemark.edges
        .map((mod: IMdNode) => {
          return mod.node.frontmatter.title == "works" ? mod.node.html : null
        })
        .filter(Boolean)[0],
    }
    const certifications = data.allFile.edges.map(
      (certification: IImageQuery) => certification.node.childImageSharp
    )
    dispatchFullContent({ header, about, certifications, works })
    setLoading(false)
  }, [])

  return !loading ? (
    <>
      <Header />
      <section id="about">
        <About />
        <Container fluid>
          <Row id="about-bottom">
            <Col md={6} id="skills">
              {typeof window !== "undefined" && <Skills />}
            </Col>
            <Col md={6} id="certifications">
              <Certifications />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  ) : (
    <Loading />
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
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const mapDispatchToProps = (dispatch: any) => ({
  dispatchFullContent: (payload: IState) =>
    dispatch({ type: dispatchContent, payload }),
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
