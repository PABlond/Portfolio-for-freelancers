import React from "react"
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from "react-force-graph"
import data_back from "./skills_back"
import SpriteText from "three-spritetext"
import data_front from "./skill_front"
import data_data from "./skill_data"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import certFront from "./../Certifications/certifications_front"
import certBack from "./../Certifications/certifications_back"
import certData from "./../Certifications/certifications_data"

import Certifications from "./../Certifications"
export default () => {
  // const data = await fetch('../datasets/miserables.json').then(res => res.json())
  const width = document.body.scrollWidth / 2
  const height = window.innerHeight || document.body.clientHeight
  return (
    <div id="about-bottom">
      <Tabs>
        <TabList>
          <Tab>Front end</Tab>
          <Tab>Back end</Tab>
          <Tab>Data enthusiast</Tab>
        </TabList>

        {[
          {
            data: data_front,
            certs: certFront,
          },
          {
            data: data_back,
            certs: certBack,
          },
          {
            data: data_data,
            certs: certData,
          },
        ].map(discipline => {
          return (
            <TabPanel className="tab-panel">
              <div className="skills">
                <ForceGraph3D
                  linkWidth={3}
                  linkWidth={2}
                  width={width/1}
                  height={height / 2}
                  graphData={discipline.data}
                  nodeAutoColorBy="group"
                  nodeThreeObject={node => {
                    const sprite = new SpriteText(node.id)
                    sprite.color = node.color
                    sprite.textHeight = 13
                    return sprite
                  }}
                  zoom={5}
                  enableNodeDrag={true}
                  backgroundColor="#191919"
                />
              </div>
              <Certifications certs={discipline.certs} />
            </TabPanel>
          )
        })}
      </Tabs>
    </div>
  )
}
