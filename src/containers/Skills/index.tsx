import React, { useState, useEffect } from "react"
import skills from "../../data/skills"
import { Container, Badge } from "react-bootstrap"

export default () => {
  return (
    <Container id="skills">
      <h3>Skills</h3>
      <div>
        <h4>Font-End</h4>
        {skills.frontEnd.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>Back-End</h4>
        {skills.backEnd.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>Databases</h4>
        {skills.db.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>QA</h4>
        {skills.qA.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>DevOps</h4>
        {skills.devOps.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>Development Workflow</h4>
        {skills.devWorkFlow.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>

      <div>
        <h4>API</h4>
        {skills.api.map((skill: string) => (
          <Badge variant="secondary">{skill}</Badge>
        ))}
      </div>
    </Container>
  )
}
