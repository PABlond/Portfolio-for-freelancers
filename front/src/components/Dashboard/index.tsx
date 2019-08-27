import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import getPageViews from "./../../services/getPageViews"
import Loading from "./../Loading"
import PageViews from "./PageViews"
import {
  IPageView,
  ITrafficPerformance,
  IOp,
  IResponse
} from "./../../interfaces/analytics.interface"
import TopStats from "./TopStats"
import OpSystem from "./OpSystem"

export default () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<ITrafficPerformance>({
    pageViews: [{ x: 0, y: 0 }],
    timeOnPage: [{ x: 0, y: 0 }],
    labels: ["1969-01-01"],
    avgDuration: 0,
    totalPageViews: 0,
    op: []
  })

  useEffect(() => {
    ;(async () => {
      const { traffic, op }: IResponse = await getPageViews(
        "30daysAgo",
        "today"
      )
      dispatchData({ traffic, op })
      setLoading(false)
    })()
  }, [])

  const dispatchData = (response: IResponse) => {
    const { traffic, op } = response
    let totalPageViews: number = 0
    let avgDuration: number = 0
    for (let i: number = 0; i < traffic.length; i++) {
      totalPageViews += traffic[i].pageViews
      avgDuration += traffic[i].timeOnPage
    }
    avgDuration = parseInt((avgDuration / traffic.length).toString())
    setData({
      pageViews: traffic.map((data: IPageView, x: number) => ({
        x,
        y: data.pageViews,
      })),
      timeOnPage: traffic.map((data: IPageView, x: number) => ({
        x,
        y: data.timeOnPage,
      })),
      labels: traffic.map((data: IPageView, x: number) =>
        x % 2 ? data.date : ""
      ),
      avgDuration,
      totalPageViews,
      op
    })
  }
  return loading ? (
    <Loading />
  ) : (
    <Container className="mt-5 bg-dark">
      <h2 className="text-danger text-center mb-4">Dashboard</h2>
      {/* <DatePicker /> */}
      <Container className="p-5">
        <TopStats data={data} />
        <PageViews dispatchData={dispatchData} data={data} />
        <OpSystem data={data.op} />
      </Container>
    </Container>
  )
}
