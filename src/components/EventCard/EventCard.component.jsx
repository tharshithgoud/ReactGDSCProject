import React from "react";
import "./EventCard.styles.css";
import { Row, Col } from "react-bootstrap";
import CardImage from "../../Assets/event-card-img.png";

function EventCard(props) {
  return (
    <div className="event-card my-4 mx-auto ">
      <Row>
        <img
          src={props.img}
          className="card-img-top event-card-img img-fluid mx-auto my-4"
          alt="..."
          style={{ maxWidth: "200px", borderRadius: "100%" }}
        />
      </Row>
      <Row>
        <h5 className="fw-bold text-center">{props.name}</h5>
      </Row>
      <Row className="pt-3">
        <p className="text-center">{props.date}</p>
      </Row>

      <Row className="text-center">
        <Col>
          <a
            href={props.link}
            className="btn btn-primary rounded-pill py-2 px-3 fs-6 text-capitalize"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Details
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default EventCard;
