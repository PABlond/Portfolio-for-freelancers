import React from "react"
import store from "./../../state/store"
import pageStructure from "../App/pageStructure"

export default ({ content }) => {
  const { header } = store.getState().content
  return (
    <div id={pageStructure[content.n].id}>
      <div>
        <h1>{header.name}</h1>
        <h2>{header.title}</h2>
      </div>
      <p>{header.subtitle}</p>
    </div>
  )
}
