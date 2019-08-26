import React from "react"
import { Row, Col } from "react-bootstrap"
import { ITrafficPerformance } from "./../../interfaces/analytics.interface"

export default ({ data }: { data: ITrafficPerformance }) => (
  <Row className="mb-3">
    <Col sm={6} className="bg-danger text-light p-3 text-center">
      <p>Total views: </p>
      <h3>{data.totalPageViews}</h3>
    </Col>
    <Col sm={6} className="bg-info text-light p-3 text-center">
      <p>Average time on page: </p>
      <h3>{data.avgDuration}</h3>
    </Col>
  </Row>
)
