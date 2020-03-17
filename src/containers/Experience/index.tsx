import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import experiences from "../../data/experiences.json"

export default () => {
  return (
    <section id="experience">
      <h3>Experience</h3>
      <VerticalTimeline>
        {experiences.map(
          ({
            date,
            role,
            tasks,
            technos,
          }: {
            date: string
            role: string
            tasks: string[]
            technos: string
          }) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h4 className="vertical-timeline-element-subtitle">{role}</h4>
              {tasks.map((work: string) => (
                <p>{work}</p>
              ))}
              <p className="technos">{technos}</p>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </section>
  )
}
