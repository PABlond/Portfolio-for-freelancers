import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
// import store from "./../../state/store"
import {
  VerticalBarSeries,
  XAxis,
  XYPlot,
  LineSeries,
  DiscreteColorLegend,
  YAxis,
} from "react-vis"
import {
  IPageView,
  ITrafficPerformance,
  ISelectionRange
} from "./../../interfaces/analytics.interface"
import store from "./../../state/store"
import DatePicker from "./DatePicker"
import moment from "moment"
import getPageViews from "./../../services/getPageViews"
import "react-vis/dist/style.css"

export default ({
  data,
  setData,
}: {
  data: ITrafficPerformance
  setData: any
}) => {
  const [selectionRange, setSelectionRange] = useState<ISelectionRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })
  const [showDateRanges, setShowDateRanges] = useState<boolean>(false)
  const {
    nav: { width },
  } = store.getState()
  const handleSelect = async (ranges: {
    selection: { startDate: Date; endDate: Date; key: string }
  }) => {
    const { startDate, endDate } = ranges.selection
    const response = await getPageViews(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("YYYY-MM-DD")
    )
    if (response) {
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
          response.length > 10 ? (x % 2 ? data.date : "") : data.date
        ),
      })
      setSelectionRange(ranges.selection)
      setShowDateRanges(false)
    }
  }

  const tickFormat = (i: number) => {
    return (
      <tspan>
        <tspan x="0" dy="1em">
          {data.labels[i].slice(4, 8)}
        </tspan>
      </tspan>
    )
  }

  const handleClose = () => setShowDateRanges(false)
  return (
    <Container fluid>
      <div className=" w-100 d-flex justify-content-center mb-2">
        <h3 className="mr-2">Traffic performance</h3>
        {showDateRanges ? (
          <DatePicker
            selectionRange={selectionRange}
            handleSelect={handleSelect}
            handleClose={handleClose}
          />
        ) : (
          <Button onClick={() => setShowDateRanges(true)}>Change Dates</Button>
        )}
      </div>
      {/* {data[0].theta > 0 ? ( */}
      <XYPlot height={150} width={width * 0.7} xType="ordinal">
        <XAxis
          title="Date"
          titlePosition="middle-under"
          tickLabelAngle={-90}
          tickFormat={tickFormat}
        />
        <DiscreteColorLegend
          items={["Time on page", "Page view"]}
          orientation="horizontal"
          colors={["blue", "red"]}
        />

        <YAxis />
        <VerticalBarSeries data={data.timeOnPage} color="blue" />
        <LineSeries data={data.pageViews} color="red" />
      </XYPlot>
      {/* ) : (
        <p>No views</p>
      )} */}
    </Container>
  )
}
