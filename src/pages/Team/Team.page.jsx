import React from "react";
import { Container, Row } from "react-bootstrap";
import Board from "../../components/Team/Board/Board.component";
import Flickity from "react-flickity-component";

function Team() {
  return (
    <Container>
            <Row>
        <header className="text-center display-5 py-5">Meet The Team</header>
      </Row>
      <Row>
        <header className="text-center display-5 py-4">The Board</header>
      </Row>
      <Row>
        <Board />
      </Row>

      <Row>
        <header className="text-center display-5 py-5">Technical Team</header>
      </Row>
      <Row>
        <Board />
      </Row>
      <Row>
        <header className="text-center display-5 py-5">Management Team</header>
      </Row>
      <Row>
        <Board />
      </Row>
      <Row>
        <header className="text-center display-5 py-5">Design Team</header>
      </Row>
      <Row>
        <Board />
      </Row>
    </Container>
  );
}

export default Team;
