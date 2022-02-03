import React, { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../Assets/desktop-logo.png";
import FooterIntLink from "./FooterIntLink.component";
import FooterExtLink from "./FooterExtLink.component";
import insta from "./insta.svg";
import discord from "./discord.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import git from "./git.svg";
import LogoLink from "./LogoLink.component";

function DesktopFooter() {
  const [event, setEvent] = useState([]);
  const eventCollectionRef = collection(db, "events-21-22");
  useEffect(() => {
    const getEvent = async () => {
      const data = await getDocs(eventCollectionRef);
      setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);
  return (
    <Container fluid className="d-none d-md-block d-lg-block d-xl-block mt-5">
      <Row className="pb-1 footer-border-top" />
      <Container className=" py-5">
        <Row className="text-center">
          <Col>
            <Row>
              <Col className="pb-2 fw-bold fs-4 ">About US</Col>
            </Row>
            <FooterExtLink
              name="GDSC Community"
              link="https://gdsc.community.dev/vellore-institute-of-technology-ap-campus"
            />
            <FooterIntLink link="team" name="Meet The Team" />
            <FooterIntLink link="/gallery" name="Gallery" />
          </Col>
          <Col>
            <Row>
              <Col className="pb-2 fw-bold fs-4">Events</Col>
            </Row>
            {event.map((data) => {
              if (data.upcoming == true) {
                return <FooterExtLink name={data.name} link={data.link} />;
              }
            })}
          </Col>
          <Col>
            <Row>
              <Col className="pb-2 fw-bold fs-4">Social</Col>
            </Row>
            <Row className="pt-2 d-flex justify-content-center">
              <LogoLink
                img={insta}
                link="https://www.instagram.com/gdscvitap"
              />
              <LogoLink
                img={discord}
                link="https://discord.com/channels/805768862339432488"
              />
              <LogoLink img={youtube} link="https://youtube.com/gdscvitap" />
            </Row>
            <Row Row className="pt-2 d-flex justify-content-center">
              <LogoLink
                img={linkedin}
                link="https://www.linkedin.com/company/dscvitap"
              />
              <LogoLink img={twitter} link="https://twitter.com/gdscvitap" />
              <LogoLink img={git} link="https://github.com/DSC-VITAP/" />
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="pb-2 fw-bold fs-4">Admin</Col>
            </Row>
            <Row>
              <Link
                to="/admin"
                style={{ color: "black" }}
                className="text-decoration-none fs-5 pt-2"
              >
                Admin Login
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="text-center">
        <Link to="/">
          <img
            src={logo}
            className="text-center"
            style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
          />
        </Link>
      </Row>
    </Container>
  );
}

export default DesktopFooter;
