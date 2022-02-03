import React from "react";
import { Row, Col } from "react-bootstrap";

function BoardMember(props) {
  return (
    <Col className = "col-md-3 px-3">
      <Row>
        <img
          src={props.data.image}
          className="card-img-top event-card-img img-fluid mx-auto my-4"
          alt="..."
          style={{ maxWidth: "200px", borderRadius: "100%" }}
        />
        <div>
          
        </div>
      </Row>
      <Row>
        <h5 className="fw-bold text-center">{props.data.name}</h5>
      </Row>
      <Row>
        <p className="text-center">{props.data.role}</p>
      </Row>
    </Col>

  );
}

export default BoardMember;
