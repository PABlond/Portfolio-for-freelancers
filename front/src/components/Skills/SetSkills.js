import React from "react"
import { ForceGraph2D } from "react-force-graph"
import data_back from "./skills_back"
import data_front from "./skill_front"
import data_data from "./skill_data"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import store from "./../../state/store"
import Certifications from "./../Certifications"
import { skills as skillsStyle } from "./../../styles/style"

export default () => {
  const props = store.getState()
  const { width, height } = props.nav
  const { skills } = props.content.about
  const tabs = skills.map(skill => {
    const { title, nodes, links } = skill
    return {
      title,
      data: { nodes, links },
    }
  })
  console.log(tabs)

  const onChange = e => {
      console.log(e)
  }

  return (
    <Container fluid={true} className="pl-0 pr-0">
      <Row style={{ background: width > 768 ? "#191919" : "#ebfffb" }}>
        <Tabs defaultActiveKey={tabs[0].title}>
          {tabs.map((discipline, key) => {
            return (
              <Tab
                eventKey={discipline.title}
                title={discipline.title}
                key={key}
              >
                <div>
                  <h4>Nodes</h4>
                  {discipline.data.nodes.map((node, i) => (
                    <li>
                      <input type="text" value={node.id} onChange={() => onChange(i)} /> -{" "}
                      <input type="text" value={node.group} />
                    </li>
                  ))}
                </div>
                <div>
                  <h4>Links</h4>
                  {discipline.data.links.map((link, i) => (
                    <li>
                      <input type="text" value={link.source} /> -{" "}
                      <input type="text" value={link.target} /> -{" "}
                      <input type="text" value={link.value} />
                    </li>
                  ))}
                </div>
              </Tab>
            )
          })}
        </Tabs>
      </Row>
    </Container>
  )
}
