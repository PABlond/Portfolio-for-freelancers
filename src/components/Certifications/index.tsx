import React, { useState } from "react"
import { Carousel, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { connect } from "react-redux"
import { ICertifications } from "./../../interfaces/module.interface"
import { IImageFluid } from "./../../interfaces/query.interface"
import { IState } from "./../../interfaces/state.interface"

const Certifications = ({ certifications }: ICertifications) => {
  const [index, setIndex] = useState<number>(0)

  const handleSelect: (selectedIndex: number) => void = selectedIndex =>
    setIndex(selectedIndex)

  return (
    <Col md={6} id="certifications">
      <div className="certifications-content">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
          {certifications.map((cert: IImageFluid, i: number) => (
            <Carousel.Item key={i}>
              <Img {...cert} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Col>
  )
}

const mapStateToProps = (state: { content: IState }) => {
  const { certifications } = state.content
  return {
    certifications,
  }
}

export default connect(mapStateToProps)(Certifications)
