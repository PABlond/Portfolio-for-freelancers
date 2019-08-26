import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import getPageViews from "./../../services/getPageViews"
import Loading from "./../Loading"
import PageViews from "./PageViews"
import {
  IPageView,
  ITrafficPerformance,
} from "./../../interfaces/analytics.interface"
import TopStats from "./TopStats"

export default () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<ITrafficPerformance>({
    pageViews: [{ x: 0, y: 0 }],
    timeOnPage: [{ x: 0, y: 0 }],
    labels: ["1969-01-01"],
    avgDuration: 0,
    totalPageViews: 0,
  })

  useEffect(() => {
    ;(async () => {
      const response: IPageView[] = await getPageViews("30daysAgo", "today")
      dispatchData(response)
      setLoading(false)
    })()
  }, [])

  const dispatchData = (response: IPageView[]) => {
    let totalPageViews: number = 0
    let avgDuration: number = 0
    for (let i: number = 0; i < response.length; i++) {
      totalPageViews += response[i].pageViews
      avgDuration += response[i].timeOnPage
    }
    avgDuration = parseInt((avgDuration / response.length).toString())
    setData({
      pageViews: response.map((data: IPageView, x: number) => ({
        x,
        y: data.pageViews,
      })),
      timeOnPage: response.map((data: IPageView, x: number) => ({
        x,
        y: data.timeOnPage,
      })),
      labels: response.map((data: IPageView, x: number) =>
        x % 2 ? data.date : ""
      ),
      avgDuration,
      totalPageViews,
    })
  }

  return loading ? (
    <Loading />
  ) : (
    <Container className="mt-5">
      <h2 className="text-danger text-center mb-4">Dashboard</h2>
      {/* <DatePicker /> */}
      <Container className="border p-5">
        <TopStats data={data} />
        <PageViews dispatchData={dispatchData} data={data} />
      </Container>
    </Container>
  )
}
