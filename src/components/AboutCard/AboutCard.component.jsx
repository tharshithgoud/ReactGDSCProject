import { Row } from "react-bootstrap";
import React from "react";

function AboutCard(props) {
  return (
    <div>
      <Row>
        <img
          src={props.img}
          className="card-img-top event-card-img img-fluid mx-auto my-4"
          alt="..."
          style={{ maxWidth: "200px" }}
        />
      </Row>
      <Row>
        <h5 className="fw-bold text-center">{props.title} </h5>
      </Row>
      <Row className="pt-3">
        <p className="text-center px-5">
          {props.text}
        </p>
      </Row>
    </div>
  );
}

export default AboutCard;
