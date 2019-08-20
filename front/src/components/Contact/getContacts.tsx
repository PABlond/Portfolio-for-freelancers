import React, { useState } from "react"
import store from "./../../state/store"
import { Container, Row, Accordion, Card, Col, Button } from "react-bootstrap"
import moment from "moment"
import readMessage from "./../../services/readMessage"
import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import { IContact } from "../../interfaces/contact.interface"

export default () => {
  const props = store.getState()
  const { works, about, header, contacts } = props.content
  const [contactsState, setContactsState] = useState<IContact[]>(contacts)

  const onClick: (i: number) => any = async i => {
    if (!contactsState[i].isRead) {
      const { _id } = contactsState[i]
      const newContacts: { contact: IContact[] } = await readMessage({ _id })
      dispatchFullContent({ contact: newContacts, works, about, header })
      setContactsState(newContacts.contact)
    }
  }

  return (
    <Container className="mt-3 p-5">
      <h2 className="text-center mb-4 text-danger">Last form submissions</h2>
      <Accordion defaultActiveKey="0">
        {contactsState.reverse().map((contact: IContact, i: number) => (
          <Card key={i} onClick={() => onClick(i)}>
            <Card.Header
              className={(!contact.isRead ? "bg-danger" : null) + " p-0"}
            >
              <Accordion.Toggle
                className={"w-100"}
                as={Button}
                variant="link"
                eventKey={i.toString()}
              >
                <Container>
                  <Row className={contact.isRead ? "text-dark" : "text-light"}>
                    <Col md={8}>
                      <p className="m-0">{contact.name}</p>
                    </Col>
                    <Col md={4}>
                      <p className="m-0">
                        {moment
                          .unix(contact.at / 1000)
                          .format("MM/DD/YYYY h:mm:ss A")}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i.toString()}>
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
