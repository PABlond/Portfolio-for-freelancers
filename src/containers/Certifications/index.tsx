import React from "react"
import { Container, Carousel } from "react-bootstrap"
import certifications from "../../data/certifications"
import { StaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

export default () => {
  return (
    <Container fluid id="certifications">
      <h3 className="text-center">Certifications</h3>
      <StaticQuery
        query={graphql`
          query CertificationsImgs {
            allFile(filter: { relativeDirectory: { eq: "certifications" } }) {
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
          <Carousel indicators={false}>
            {data.allFile.edges.map(({ node }) => {
              console.log(node)
              return (
                <Carousel.Item>
                  <Img
                    style={{
                      maxWidth: "500px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    {...node.childImageSharp}
                  />
                  {certifications.map(({ filename, name }) =>
                    filename == node.name ? (
                      <p className="text-center">{name}</p>
                    ) : null
                  )}
                </Carousel.Item>
              )
            })}
          </Carousel>
        )}
      />
    </Container>
  )
}
