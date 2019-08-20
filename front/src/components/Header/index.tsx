import React from "react"
import store from "../../state/store"

export default () => {
  const {
    header,
  }: {
    header: { name: string; title: string; subtitle: string }
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
