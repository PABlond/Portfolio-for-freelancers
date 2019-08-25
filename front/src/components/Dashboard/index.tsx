import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import getPageViews from "./../../services/getPageViews"
import Loading from "./../Loading"
import PageViews from "./PageViews"
import { IValue, IPageView } from "./../../interfaces/analytics.interface"
import DatePicker from './DatePicker'

export default () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [value, setValue] = useState<IValue>({
    isOpen: false,
    focus: {
      angle: 0,
      angle0: 0,
      color: 0,
      radius: 0,
      radius0: 0,
      theta: 0,
      x: 0,
      y: 0,
    },
  })
  const [pageViews, setPageViews] = useState<IPageView[]>([{ theta: 0 }])

  useEffect(() => {
    ;(async () => {
      const response = await getPageViews("30daysAgo", "today")
      const data = Object.keys(response).map(val => ({ theta: response[val] }))
      setPageViews(data)
      setLoading(false)
    })()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <Container className="mt-5">
      <h2 className="text-danger text-center mb-4">Dashboard</h2>
      {/* <DatePicker /> */}
      <Container className="border p-5">
        <Row>
          <Col md={6}>
            <PageViews setPageViews={setPageViews} data={pageViews} value={value} setValue={setValue} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
