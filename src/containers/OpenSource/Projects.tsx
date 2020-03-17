import React from "react"
import { Row, Col } from "react-bootstrap"
import openSource from "../../data/open-source.json"
import Img, { FluidObject } from "gatsby-image"

export default (data: {
  allFile: {
    edges: {
      node: {
        name: string
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }[]
  }
}) => (
  <Row>
    {openSource.map(({ title, technos, content }) => (
      <Col md={3}>
        <h4>{title}</h4>
        {data.allFile.edges.map(
          ({
            node: { name, childImageSharp },
          }: {
            node: {
              name: string
              childImageSharp: {
                fluid: FluidObject
              }
            }
          }) =>
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
)
