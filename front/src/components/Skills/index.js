import React from "react"
import { ForceGraph2D } from "react-force-graph"
import data_back from "./skills_back"
import data_front from "./skill_front"
import data_data from "./skill_data"
import "react-tabs/style/react-tabs.css"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import store from "./../../state/store"
import Certifications from "./../Certifications"

export default () => {
  const { width, height } = store.getState().nav
  const tabs = [
    { title: "Front end", data: data_front },
    { title: "Back end", data: data_back },
    { title: "Data enthusiast", data: data_data },
  ]
  return (
    <Container fluid={true} style={{ height: "50vh" }} className="pl-0 pr-0">
      <Row style={{ background: "#191919" }}>
        <Col md={6}>
          <Tabs defaultActiveKey="Front end" className="pl-0 pr-0 text-light">
            {tabs.map((discipline, key) => {
              return (
                <Tab
                  eventKey={discipline.title}
                  title={discipline.title}
                  key={key}
                >
                  <ForceGraph2D
                    linkWidth={5}
                    linkColor="white"
                    linkOpacity={0}
                    showNavInfo={false}
                    width={width / 2}
                    height={height / 2 - 50}
                    graphData={discipline.data}
                    nodeAutoColorBy="group"
                    nodeCanvasObject={(node, ctx, globalScale) => {
                      const label = node.id
                      const fontSize = 15 / globalScale
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
                    zoom={2}
                    enableNodeDrag={true}
                    backgroundColor="#191919"
                  />
                </Tab>
              )
            })}
          </Tabs>
        </Col>
        <Certifications />
      </Row>
    </Container>
  )
}
