import React from "react"
import Skills from "./../Skills"
import pageStructure from "../App/pageStructure"

export default ({ content }) => {
  return (
    <div id={pageStructure[content.n].id} className="container-fluid">
      <div id="about-top" className="w-100 d-flex justify-content-center align-items-center flex-columns">
        <div id="about-content" dangerouslySetInnerHTML={content} />
      </div>
      <Skills />
    </div>
  )
}
