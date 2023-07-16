import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiTwotoneDelete } from "react-icons/ai";



const AppointmentList = ({apps, setApps}) => {

    const handleDelete=(id)=>{
        setApps(apps.filter((item)=>item.id!=id))
    }

    const handleDoubleClick=(id)=>{
       
        setApps(
            apps.map((item) =>
              item.id == id ? { ...item, consulted: !item.consulted } : item
            )
          )
    }

    return (
    <div >
        {apps.length< 1 && <img src="./img/appointment.jpg"  width="100%" /> }
      {apps.map(({ patient, day, doctor, id, consulted }) => (
        <div onDoubleClick={()=>handleDoubleClick(id)} className={consulted ? "appointments consulted" : "appointments" }>
        <Row className="border m-2 align-items-center justify-content-between appointments" key={id}>
          <Col xs={12} md={4}>
            <h5>{patient}</h5>
            <h6>{doctor}</h6>
           
          </Col>
          <Col xs={5} md={4}>
            <h6>{day}</h6>
          </Col>
          <Col xs={2} md={2}>
            <AiTwotoneDelete type="button" onClick={()=>handleDelete(id)} className="fs-2 text-danger" />
          </Col>
        </Row>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
