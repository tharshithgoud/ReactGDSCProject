import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogpana from "./Blogging-pana.png";

function Blog() {
  return (
    <Container>
      <Row>
        <img src={blogpana} className="img-fluid" />
      </Row>
    </Container>
  );
}

export default Blog;
