import React from "react"
import { Random } from "react-animated-text"
import pageStructure from "../App/pageStructure"

export default ({ content }) => {
  return (
    <div id={pageStructure[content.n].id}>
      <div>
        <h1>
        Pierre-Alexis Blond
        </h1>
        <h2>Full Stack developer</h2>
      </div>
      <p dangerouslySetInnerHTML={content} />
    </div>
  )
}
