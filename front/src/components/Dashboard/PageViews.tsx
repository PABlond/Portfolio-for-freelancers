import React, { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import {
  VerticalBarSeries,
  XAxis,
  XYPlot,
  LineSeries,
  DiscreteColorLegend,
  makeWidthFlexible,
  YAxis,
} from "react-vis"
import {
  ITrafficPerformance,
  ISelectionRange,
} from "./../../interfaces/analytics.interface"
import DatePicker from "./DatePicker"
import moment from "moment"
import getPageViews from "./../../services/getPageViews"
import "react-vis/dist/style.css"

export default ({
  data,
  dispatchData,
}: {
  data: ITrafficPerformance
  dispatchData: any
}) => {
  const [selectionRange, setSelectionRange] = useState<ISelectionRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })
  const [showDateRanges, setShowDateRanges] = useState<boolean>(false)
  const handleSelect = async (ranges: {
    selection: { startDate: Date; endDate: Date; key: string }
  }) => {
    const { startDate, endDate } = ranges.selection
    const response = await getPageViews(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("YYYY-MM-DD")
    )
    if (response) {
      dispatchData(response)
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
  const FlexibleXYPlot = makeWidthFlexible(XYPlot)

  const handleClose = () => setShowDateRanges(false)
  return (
    <Container fluid className="border pt-3 bg-light">
    <div className="d-flex justify-content-center align-items-center mb-4">
      <h3 className="mr-2 text-danger text-center">Traffic performance</h3>
      {showDateRanges ? (
        <DatePicker
          selectionRange={selectionRange}
          handleSelect={handleSelect}
          handleClose={handleClose}
        />
      ) : (
        <p className="text-danger" onClick={() => setShowDateRanges(true)}>
          Change Dates
        </p>
      )}
      </div>
      <Row className="mb-5">
      <div className=" w-100 d-flex justify-content-center mb-2"></div>
      <Col md={6}>
        <h5 className="text-center">Page views</h5>
        <FlexibleXYPlot height={150} xType="ordinal">
          <XAxis
            title="Date"
            titlePosition="middle-under"
            tickLabelAngle={-90}
            tickFormat={tickFormat}
          />
          <YAxis />
          <LineSeries data={data.pageViews} color="red" />
        </FlexibleXYPlot>
      </Col>
      <Col md={6}>
        <h5 className="text-center">Time on page</h5>
        <FlexibleXYPlot height={150} xType="ordinal">
          <XAxis
            title="Date"
            titlePosition="middle-under"
            tickLabelAngle={-90}
            tickFormat={tickFormat}
          />
          <YAxis />
          <VerticalBarSeries data={data.timeOnPage} color="blue" />
        </FlexibleXYPlot>
      </Col>
    </Row>
    </Container>
  )
}
