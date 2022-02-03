import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/desktop-logo.png";
import insta from "./insta.svg";
import discord from "./discord.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import git from "./git.svg";

function MobileFooter() {
  return (
    <Container className="mt-5 d-md-none">
      <Row className=" d-flex justify-content-center">
        <Col className="col-3 pr-0">
          <hr className="footer-line" />
        </Col>
        <Col className="col-5 align-items-center">
          <h4 className="text-center px-0">Find us on</h4>
        </Col>
        <Col className="col-3 pl-0 align-items-center">
          <hr className="footer-line" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-2 text-center pl-4">
          <a
            href="https://www.instagram.com/gdscvitap"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={insta} />
          </a>
        </Col>
        <Col className="col-md-2 text-center">
          <a
            href="https://discord.com/channels/805768862339432488"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={discord} />
          </a>
        </Col>
        <Col className="col-md-2 text-center">
          <a
            href="https://youtube.com/gdscvitap"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={youtube} />
          </a>
        </Col>
        <Col className="col-md-2 text-dark text-center">
          <a
            href="https://www.linkedin.com/company/dscvitap"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
        </Col>
        <Col className="col-md-2 text-center">
          <a
            href="https://twitter.com/gdscvitap"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} />
          </a>
        </Col>
        <Col className="col-md-2 text-center pr-4">
          <a
            href="https://github.com/DSC-VITAP/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={git} />
          </a>
        </Col>
      </Row>
      <Row className="mt-4 pt-3 mb-2 text-center">
        <Link to="/">
          <img
            src={logo}
            className="text-center"
            style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
          />
        </Link>
      </Row>
    </Container>
  );
}

export default MobileFooter;
