import React from "react"
import store from "../../state/store"
import { IHeader } from "./header.interface"

export default () => {
  const {
    header,
  }: {
    header: IHeader
  } = store.getState().content
  return (
    <div id="header">
      <div>
        <h1>{header.name}</h1>
        <h2>{header.title}</h2>
      </div>
      <p>{header.subtitle}</p>
    </div>
  )
}
