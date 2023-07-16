import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";
import AppointmentList from "./AppointmentList";

const Doctors = ({ apps, setApps }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  return (
    <Container>
      <Row xs={2} md={4} lg={6} className="justify-content-center">
        {doctorData?.map(({ name, id, img }) => (
          <Col key={id}>
            <img
              onClick={() => (setShow(true), setDrName(name))}
              src={img}
              alt=""
              className="img-thumbnail doctor-img"
            />
            <h6 className="text-center">{name}</h6>
          </Col>
        ))}
      </Row>

      <AddModal
        setApps={setApps}
        apps={apps}
        show={show}
        drName={drName}
        handleClose={() => setShow(false)}
      />
      <AppointmentList apps={apps} setApps={setApps} />
    </Container>
  );
};

export default Doctors;
