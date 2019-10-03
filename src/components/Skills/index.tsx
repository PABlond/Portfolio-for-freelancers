import React, { useState, useEffect } from "react"
import { ForceGraph2D } from "react-force-graph"
import { Tabs, Tab } from "react-bootstrap"
import skills from "./../../assets/json/skills"

export default () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const tabs: any[] = skills.map((skill: any) => {
    const { title, nodes, links } = skill
    return {
      title,
      data: { nodes, links },
    }
  })

  useEffect(() => {
    if (typeof window !== `undefined` && document.getElementById("skills")) {
      setDimensions({
        width: (document.getElementById("skills") as any).offsetWidth,
        height: window.innerHeight,
      })
    }
  }, [])

  return (
    <Tabs
      defaultActiveKey="Front end"
      className="pl-0 pr-0 text-light"
      id="uncontrolled-tab-example"
    >
      {tabs.map((discipline: any, key: number) => {
        return (
          <Tab eventKey={discipline.title} title={discipline.title} key={key}>
            <ForceGraph2D
              linkWidth={5}
              linkColor="white"
              linkOpacity={0}
              width={
                dimensions.width > 768 ? dimensions.width / 2 : dimensions.width
              }
              height={dimensions.height / 2 - 50}
              graphData={discipline.data}
              nodeAutoColorBy="group"
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                const label = node.id
                const fontSize = 15 / globalScale
                ctx.font = `${fontSize}px Sans-Serif`
                const textWidth = ctx.measureText(label).width
                const bckgDimensions = [textWidth, fontSize].map(
                  n => n + fontSize * 0.2
                )
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
              enableNodeDrag={true}
              backgroundColor="#191919"
            />
          </Tab>
        )
      })}
    </Tabs>
  )
}
