import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function PatientList() {
  const [patients,setPatients] = useState([]);

  const getPatientsList = async (id) => {
    {
      const response = await fetch(
        `http://localhost:8081/patient`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setPatients(json);
    }
  };

  useEffect(()=>{
    getPatientsList();
  })
  
  return (
    <div className="container my-5">
      <div className="container my-5"><input type="text" placeholder="Search.."/></div>
      <div
        style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
      >
        Patient List
      </div>
      <Row xs={1} md={1}>
        {patients.map((idx)=>(
          <Col>
          <div className="card text-center my-5">
            <div
              className="btn btn-primary"
              style={{
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
            >
              Patient Name: {idx.name}
            </div>
            <div
              className="card-body"
              style={{ height: "120px", overflow: "hidden" }}
            >
              <div>Age : {idx.age} </div><div>Mobile Number : {idx.phone}</div>
            </div>
            <div className="card-footer">See Appointments</div>
          </div>
        </Col>
        ))}
        
      </Row>

     
    </div>
  );
}
