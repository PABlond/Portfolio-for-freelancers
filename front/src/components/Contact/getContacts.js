import React, { useState } from "react"
import store from "./../../state/store"
import { Container, Row, Accordion, Card, Col, Button } from "react-bootstrap"
import moment from "moment"
import readMessage from './../../services/readMessage'
import dispatchFullContent from './../../state/actions/dispatchFullContent'

export default () => {
  const props = store.getState()
  const { works, about, header, contacts } = props.content
  console.log(contacts)
  const [contactsState, setContactsState] = useState(contacts)

  const onClick = async i => {
      if (!contactsState[i].isRead) {
        const {_id} = contactsState[i]
        const newContacts = await readMessage({_id})
        dispatchFullContent({contact: newContacts, works, about, header})
        setContactsState(newContacts.contact)
      }
  }

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        {contactsState.map((contact, i) => (
          <Card key={i} onClick={() => onClick(i)}>
            <Card.Header className={!contact.isRead ? "bg-danger" : null}>
              <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                <Row>
                <Col md={4}>
                  <p>{contact.email}</p>
                </Col>
                <Col md={4}>
                  <p>{contact.name}</p>
                </Col>
                <Col md={4}>
                  <p>
                    {moment
                      .unix(contact.at / 1000)
                      .format("MM/DD/YYYY h:mm:ss A")}
                  </p>
                </Col>
                </Row>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                <p>{contact.content}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  )
}
