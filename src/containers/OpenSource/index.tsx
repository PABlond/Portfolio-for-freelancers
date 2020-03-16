import React from "react"
import openSource from "../../data/open-source.json"
import { Container, Row, Col } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

export default () => {
  console.log(openSource)
  return (
    <section id="open-source">
      <h3>Open Source</h3>

      <Container>
        <StaticQuery
          query={graphql`
            query OpenSourceImgs {
              allFile(filter: { relativeDirectory: { eq: "open_source" } }) {
                edges {
                  node {
                    name
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data: {
            allFile: {
              edges: {
                node: {
                  name: string
                  childImageSharp: {
                    fluid: FluidObject
                  }
                }[]
              }
            }
          }) => (
            <Row>
              {openSource.map(({ title, technos, content }) => (
                <Col md={3}>
                  <h4>{title}</h4>
                  {data.allFile.edges.map(
                    ({ node: { name, childImageSharp } }) =>
                      name === title ? (
                        <Img
                          style={{
                            width: "225px",
                            // height: "225px",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                          {...childImageSharp}
                        />
                      ) : null
                  )}
                  <h6>{content}</h6>
                  <p className="technos">{technos}</p>
                </Col>
              ))}
            </Row>
          )}
        />
        <Row>
          <h4 id="more">
            More Project on <a href="https://github.com/PABlond">Github</a>{" "}
            (more than 30 public repositories)
          </h4>
        </Row>
      </Container>
    </section>
  )
}
