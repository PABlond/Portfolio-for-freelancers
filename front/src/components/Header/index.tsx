import React from "react"
import store from "../../state/store"
import { IHeader } from "../../interfaces/header.interface"

export default () => {
  const {
    content: { header },
  }: {
    content: { header: IHeader }
  } = store.getState()

  return (
    <div id="header">
      <div>
        <h1 id="header-name">{header.name}</h1>
        <h2 id="header-title">{header.title}</h2>
      </div>
      <p id="header-p">{header.subtitle}</p>
    </div>
  )
}
