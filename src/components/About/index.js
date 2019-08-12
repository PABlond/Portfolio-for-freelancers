import React, { useState } from "react"
import Skills from "./../Skills"
import pageStructure from "../App/pageStructure"

export default ({ content }) => {
  // setInterval(() => {
  //   if (i < fullBio.length) {
  //     setBio(bio + fullBio[i])
  //     i+=1
  //   }
  // }, 100)
  // console.log(bio)
  return (
    <div id={pageStructure[content.n].id} className="container-fluid">
      <div id="about-top" className="w-100 d-flex justify-content-center align-items-center flex-columns">
        <div id="about-content" dangerouslySetInnerHTML={content} />
      </div>
      <Skills />
    </div>
  )
}
