import React, { useState } from "react"
import { Carousel, Image, Col } from "react-bootstrap"
import store from "./../../../state/store"
import { ICertification } from "../../../interfaces/about.interface"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const [index, setIndex] = useState<number>(0)
  const props = store.getState()
  const {
    certifications,
  }: { certifications: ICertification[] } = props.content.about
  const { width }: { width: number } = props.nav

  const handleSelect: (selectedIndex: number) => void = selectedIndex =>
    setIndex(selectedIndex)

  const style = width > 768 ? {} : { marginTop: "20px" }

  return (
    <Col md={6} style={style} className="pl-0 pr-0">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <StaticQuery
          query={graphql`
            query MyQuery {
              allFile(
                filter: { sourceInstanceName: { eq: "certifications" } }
              ) {
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
          `}
          render={(data: any) => {
            console.log("certs", data)
            return (
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={3000}
              >
                {data.allFile.edges.map((cert: any, i: number) => (
                  <Carousel.Item key={i}>
                    <Img {...cert.node.childImageSharp} />
                  </Carousel.Item>
                ))}
              </Carousel>
            )
          }}
        />
      </div>
    </Col>
  )
}
