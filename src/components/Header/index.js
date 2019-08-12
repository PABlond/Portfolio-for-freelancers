import React from "react"
import { Random } from "react-animated-text"
import pageStructure from "../App/pageStructure"

export default ({ content }) => {
  return (
    <div id={pageStructure[content.n].id}>
      <div>
        <h1>
          <Random
            text={"Pierre-Alexis Blond"}
            iterations={1}
            effect="verticalFadeIn"
            effectChange={2.0}
            effectDirection="up"
          />
        </h1>
        <h2>
          <Random
            text="Full Stack developer"
            effect="verticalFadeIn"
            effectChange={2.2}
            delay={5}
            speed={10}
            iterations={1}
          />
        </h2>
      </div>
      <p dangerouslySetInnerHTML={content} />
    </div>
  )
}
