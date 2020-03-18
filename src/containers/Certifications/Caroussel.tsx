import React from "react"
import { Carousel } from "react-bootstrap"
import certifications from "../../data/certifications"
import Img, { FluidObject } from "gatsby-image"

export default ({
  allFile: { edges },
}: {
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
  <Carousel indicators={false}>
    {edges.map(({ node }) => (
      <Carousel.Item>
        <Img
          style={{
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          {...node.childImageSharp}
        />
        {certifications.map(({ organization, title }) =>
          title == node.name ? (
            <p className="text-center">
              {title} - {organization}
            </p>
          ) : null
        )}
      </Carousel.Item>
    ))}
  </Carousel>
)
