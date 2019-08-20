import React, { useState } from "react"
import { Carousel, Image, Col } from "react-bootstrap"
import store from "./../../../state/store"

export default () => {
  const [index, setIndex]: [number, any] = useState(0)
  const props: any = store.getState()
  const { certifications }: { certifications: any } = props.content.about
  const { width }: { width: number } = props.nav

  const handleSelect: any = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }
  const style = width > 768 ? {} : { marginTop: "20px" }
  return (
    <Col md={6} style={style} className="pl-0 pr-0">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
        >
          {certifications.map((cert: {thumbnail: string}, i: number) => (
            <Carousel.Item key={i}>
              <Image fluid src={cert.thumbnail} alt="test" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Col>
  )
}
