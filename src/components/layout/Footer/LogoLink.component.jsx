import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LogoLink(props) {
  return (
    <Col className="col-md-2">
      <a href={props.link} rel="noopener noreferrer" target="_blank">
        <img src={props.img} />
      </a>
    </Col>
  );
}

export default LogoLink;
