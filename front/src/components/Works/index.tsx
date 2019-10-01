import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import store from "./../../state/store"
import { IWork } from "../../interfaces/works.interface"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import works from "./../../assets/json/works"

export default () => {
  const props = store.getState()

  const { height, width }: { height: number; width: number } = props.nav
  const imgStyle = { height: 200 }
  return (
    <Container fluid={true} id="works">
      <h2>Previous Work</h2>
      <Container>
        <Row>
          <StaticQuery
            query={graphql`
              query WorksQuery {
                allFile(filter: { sourceInstanceName: { eq: "works" } }) {
                  edges {
                    node {
                      childImageSharp {
                        fixed(width: 200) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={(data: any) => {
              return (
                <>
                  {works.map((work: IWork, i: number) =>
                    i < 8 ? (
                      <Col md={3} key={i}>
                        <div className="m-3">
                          <h4>{work.title}</h4>
                          <div style={imgStyle}>
                            <Img
                              {...data.allFile.edges[i].node.childImageSharp}
                            />
                          </div>
                          <p>{work.content}</p>
                          <p className="technos">{work.technos}</p>
                        </div>
                      </Col>
                    ) : null
                  )}
                </>
              )
            }}
          />
        </Row>
      </Container>
      <div>
        <h4>
          More Project on <a href="https://github.com/PABlond">Github</a> (more
          than 20 public repositories)
        </h4>
      </div>
    </Container>
  )
}
