import React from "react"
import { Row, Container, Col } from "react-bootstrap"
import { RadialChart, makeVisFlexible, DiscreteColorLegend } from "react-vis"
import { IOp } from "./../../interfaces/analytics.interface"
export default ({ data }: {data: IOp[]}) => {
  const radialData = data.map((op: IOp) => ({ label: op.device, angle: op.count }))
  const FlexRadialChart = makeVisFlexible(RadialChart)

  return (
    <Container fluid className="border pt-3 mt-2 bg-light">
      <Row className="mb-5">
        <Col md={6}>
          <h5 className="text-center">Operating system</h5>
          <div style={{ height: 410 }}>
            <FlexRadialChart data={radialData} height={300} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
