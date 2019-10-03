import { DateRangePicker } from "react-date-range"
import React from "react"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { Modal, Button } from "react-bootstrap"
import { ISelectionRange } from "./../../../interfaces/analytics.interface"

export default ({
  selectionRange,
  handleSelect,
  handleClose,
}: {
  selectionRange: ISelectionRange
  handleSelect: any
  handleClose: any
}) => (
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
