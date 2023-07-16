import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ show, handleClose, drName, apps, setApps }) {
  const [name, setName] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();

    setApps([
      ...apps,
      {
        id: new Date().getTime,
        patient: name,
        day: date,
        consulted: false,
        doctor: drName,
      },
    ]);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for {drName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter patient name"
              value={name}
            />

            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder={new Date(new Date()).toISOString()}
              value={date}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
