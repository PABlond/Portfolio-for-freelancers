import React, { useState } from "react"
import Skills from "./../Skills"
import pageStructure from "../../pageStructure"

export default ({ content }) => {
  const [bio, setBio] = useState("")
  const imgHTML = { __html: content.__html.split("<p>")[0] }
  const fullBio = content.__html.split("<p>")[1].split("</p>")[0]
  let i = 0
  // setInterval(() => {
  //   if (i < fullBio.length) {
  //     setBio(bio + fullBio[i])
  //     i+=1
  //   }
  // }, 100)
  // console.log(bio)
  return (
    <div id={pageStructure[content.n].id}>
      <div id="about-top">
        <div id="about-content" dangerouslySetInnerHTML={content} />
      </div>
      <Skills />
    </div>
  )
}
