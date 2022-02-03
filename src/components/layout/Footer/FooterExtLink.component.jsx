import React from "react";
import { Row } from "react-bootstrap";

function FooterExtLink(props) {
  return (
    <Row>
      <a
        href={props.link}
        style={{ color: "black" }}
        className=" fs-5 pt-1 text-decoration-none"
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.name}
      </a>
    </Row>
  );
}

export default FooterExtLink;
