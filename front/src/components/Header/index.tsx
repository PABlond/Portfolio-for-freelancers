import React from "react"
import store from "../../state/store"
import { IHeader } from "../../interfaces/header.interface"
import { header as headerStyle } from "./../../styles/style"

export default () => {
  const {
    content: { header },
    nav: { height, width },
  }: {
    content: { header: IHeader }
    nav: { height: number; width: number }
  } = store.getState()
  const style = headerStyle({ height, width })

  return (
    <div id="header">
      <div>
        <h1 style={style.name}>{header.name}</h1>
        <h2 style={style.title}>{header.title}</h2>
      </div>
      <p style={style.p}>{header.subtitle}</p>
    </div>
  )
}
