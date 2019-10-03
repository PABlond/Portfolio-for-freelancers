import React, { useState, useEffect } from "react"
import { Carousel, Image, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { connect } from "react-redux"

const Certifications = ({ certifications }: []) => {
  const [index, setIndex] = useState<number>(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const handleSelect: (selectedIndex: number) => void = selectedIndex =>
    setIndex(selectedIndex)

  useEffect(() => {
    setDimensions({
      width: document.getElementById("skills").offsetWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <div className="certifications-content">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        {certifications.map((cert: any, i: number) => (
          <Carousel.Item key={i}>
            <Img {...cert} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { certifications } = state.content
  return {
    certifications,
  }
}

export default connect(mapStateToProps)(Certifications)
