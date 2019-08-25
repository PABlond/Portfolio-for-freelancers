import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
// import store from "./../../state/store"
import getPageViews from "./../../services/getPageViews"
import { RadialChart, Hint } from "react-vis"
import {
  IFocus,
  IValue,
  IPageView,
} from "./../../interfaces/analytics.interface"

export default ({
  data,
  value,
  setValue,
}: {
  data: IPageView[]
  value: IValue
  setValue: any
}) => {
  return (
    <Col md={6}>
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
    </Col>
  )
}
