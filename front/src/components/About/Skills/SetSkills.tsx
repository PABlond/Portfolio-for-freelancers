import React from "react"
import { Container, Row, Tabs, Tab } from "react-bootstrap"
import store from "../../../state/store"

export default () => {
  const props: any = store.getState()
  const { width }: {width: number} = props.nav
  const { skills } = props.content.about
  const tabs = skills.map(
    (skill: { title: string; nodes: any; links: any }) => {
      const { title, nodes, links } = skill
      return {
        title,
        data: { nodes, links },
      }
    }
  )

  return (
    <Container fluid={true} className="pl-0 pr-0">
      <Row style={{ background: width > 768 ? "#191919" : "#ebfffb" }}>
        <Tabs defaultActiveKey={tabs[0].title} id="uncontrolled-tab-example">
          {tabs.map((discipline: { title: string; data: any }, key: number) => {
            return (
              <Tab
                eventKey={discipline.title}
                title={discipline.title}
                key={key}
              >
                <div>
                  <h4>Nodes</h4>
                  {discipline.data.nodes.map(
                    (node: { group: string; id: string }, i: number) => (
                      <li key={i}>
                        <input type="text" value={node.id} /> -{" "}
                        <input type="text" value={node.group} />
                      </li>
                    )
                  )}
                </div>
                <div>
                  <h4>Links</h4>
                  {discipline.data.links.map(
                    (
                      link: { source: string; target: string; value: string },
                      i: number
                    ) => (
                      <li key={i}>
                        <input type="text" value={link.source} /> -{" "}
                        <input type="text" value={link.target} /> -{" "}
                        <input type="text" value={link.value} />
                      </li>
                    )
                  )}
                </div>
              </Tab>
            )
          })}
        </Tabs>
      </Row>
    </Container>
  )
}
