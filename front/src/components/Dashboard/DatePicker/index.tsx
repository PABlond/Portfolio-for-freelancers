import { DateRangePicker } from "react-date-range"
import React from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { Modal, Button } from "react-bootstrap"

export default ({ selectionRange, handleSelect, handleClose }) => (
  <Modal show={true}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)
