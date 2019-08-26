import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import getPageViews from "./../../services/getPageViews"
import Loading from "./../Loading"
import PageViews from "./PageViews"
import { IPageView, ITrafficPerformance } from "./../../interfaces/analytics.interface"

export default () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<ITrafficPerformance>({
    pageViews: [{ x: 0, y: 0 }],
    timeOnPage: [{ x: 0, y: 0 }],
    labels: ["1969-01-01"],
  })

  useEffect(() => {
    ;(async () => {
      const response = await getPageViews("30daysAgo", "today")
      setData({
        pageViews: response.map((data: IPageView, x:number) => ({ x, y: data.pageViews })),
        timeOnPage: response.map((data: IPageView, x:number) => ({ x, y: data.timeOnPage })),
        labels: response.map((data: IPageView, x:number) => x % 2  ? data.date : ""),
      })
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
            <PageViews
              data={data}
              setData={setData}
            />
        </Row>
      </Container>
    </Container>
  )
}
