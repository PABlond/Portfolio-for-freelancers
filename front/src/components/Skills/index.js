import React from "react"
import { ForceGraph2D } from "react-force-graph"
import data_back from "./skills_back"
import data_front from "./skill_front"
import data_data from "./skill_data"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import Certifications from "./../Certifications"
export default class Skills extends React.Component {
  componentDidMount() {
    this.fg.zoom(2)
  }

  componentDidUpdate() {
    this.fg.zoom(2)
  }

  render() {
    const width = document.body.scrollWidth / 2
    const height = window.innerHeight || document.body.clientHeight
    return (
      <div id="about-bottom" className="container-fluid pl-0 pr-0">
        <div className="row" style={{ background: "#191919" }}>
          <Tabs className="col-md-6 pl-0 pr-0 text-light">
            <TabList>
              <Tab>Front end</Tab>
              <Tab>Back end</Tab>
              <Tab>Data enthusiast</Tab>
            </TabList>

            {[
              {
                data: data_front,
              },
              {
                data: data_back,
              },
              {
                data: data_data,
              },
            ].map((discipline, key) => {
              return (
                <TabPanel className="tab-panel" key={key}>
                  <div className="skills">
                    <ForceGraph2D
                      ref={el => (this.fg = el)}
                      linkWidth={5}
                      linkColor="white"
                      linkOpacity={0}
                      showNavInfo={false}
                      width={width / 1}
                      height={height / 2 - 50}
                      graphData={discipline.data}
                      nodeAutoColorBy="group"
                      nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.id
                        const fontSize = 12 / globalScale
                        ctx.font = `${fontSize}px Sans-Serif`
                        const textWidth = ctx.measureText(label).width
                        const bckgDimensions = [textWidth, fontSize].map(
                          n => n + fontSize * 0.2
                        ) // some padding
                        ctx.fillStyle = "#191919"
                        ctx.fillRect(
                          node.x - bckgDimensions[0] / 2,
                          node.y - bckgDimensions[1] / 2,
                          ...bckgDimensions
                        )
                        ctx.textAlign = "center"
                        ctx.textBaseline = "middle"
                        ctx.fillStyle = node.color
                        ctx.fillText(label, node.x, node.y)
                      }}
                      zoom={5}
                      enableNodeDrag={true}
                      backgroundColor="#191919"
                    />
                  </div>
                </TabPanel>
              )
            })}
          </Tabs>

          <Certifications certs={this.props.certifications} />
        </div>
      </div>
    )
  }
}
