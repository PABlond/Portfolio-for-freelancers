import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import store from "./../../state/store"
import { works as worksStyle } from "./../../styles/style"
import { IWork } from "./works.interface"

export default () => {
  const props = store.getState()
  const { works }: { works: IWork[] } = props.content
  const { height, width }: { height: number; width: number } = props.nav
  const style = worksStyle({ height, width })
  const imgStyle = { maxHeight: height / 7 }
  return (
    <Container fluid={true} style={style.container} id="works">
      <h2 style={style.h2}>Previous Work</h2>
      <Container>
        <Row style={style.row}>
          {works.map((work: IWork, i: number) =>
            i < 8 ? (
              <Col md={3} key={i}>
                <div className="m-3" style={style.col}>
                  <h4>{work.title}</h4>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fluid
                    style={imgStyle}
                  />
                  <p>{work.content}</p>
                  <p className="technos">{work.technos}</p>
                </div>
              </Col>
            ) : null
          )}
        </Row>
      </Container>
      <div>
        <h4>
          More Project on <a href="https://github.com/PABlond">Github</a> (18
          public repositories)
        </h4>
      </div>
    </Container>
  )
}
