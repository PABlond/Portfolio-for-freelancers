import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
// import store from "./../../state/store"
import { RadialChart, Hint } from "react-vis"
import {
  IFocus,
  IValue,
  IPageView,
} from "./../../interfaces/analytics.interface"
import DatePicker from "./DatePicker"
import moment from "moment"
import getPageViews from "./../../services/getPageViews"

export default ({
  setPageViews,
  data,
  value,
  setValue,
}: {
  data: IPageView[]
  value: IValue
  setValue: any
}) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })
  const [showDateRanges, setShowDateRanges] = useState<boolean>(false)

  const handleSelect = async ranges => {
    const { startDate, endDate } = ranges.selection
    console.log(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("YYYY-MM-DD")
    )
    const response = await getPageViews(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("YYYY-MM-DD")
    )
    if (response) {
      const data = Object.keys(response).map(val => ({ theta: response[val] }))
      setPageViews(data)
      setSelectionRange(ranges.selection)
      setShowDateRanges(false)
    }
  }

  const handleClose = () => setShowDateRanges(false)
  return (
    <Col md={6}>
      {showDateRanges ? (
        <DatePicker
          selectionRange={selectionRange}
          handleSelect={handleSelect}
          handleClose={handleClose}
        />
      ) : (
        <Button onClick={() => setShowDateRanges(true)}>Change Dates</Button>
      )}{" "}
      {data[0].theta > 0 ? (
        <RadialChart
          width={300}
          height={300}
          innerRadius={100}
          radius={140}
          getAngle={(d: { theta: number }) => d.theta}
          data={data}
          onValueMouseOver={(v: IFocus) => setValue({ isOpen: true, focus: v })}
          onSeriesMouseOut={() => setValue({ ...value, isOpen: false })}
          padAngle={0.04}
        >
          {value.isOpen ? (
            <Hint value={value.focus}>
              <h3>{value.focus.theta}</h3>
            </Hint>
          ) : null}
        </RadialChart>
      ) : (
        <p>No views</p>
      )}
    </Col>
  )
}
