import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.styles.css";
import Picture3 from "../../Assets/Picture3.svg";
import Picture4 from "../../Assets/mobile-about.png";
import { useSpring, animated } from "react-spring";
import Board from "../../components/Team/Board/Board.component";
import AboutCard from "../../components/AboutCard/AboutCard.component";
import aboutImg from "../../Assets/about-goal.png";
import mission from "../../Assets/mission.png";
import vision from "../../Assets/vision.png";

function About() {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
    delay: 400,
  });
  return (
    <animated.div style={props}>
      <Container fluid className="px-0">
        <img
          src={Picture3}
          className="about-img 	d-none d-lg-block d-xl-block"
        />
        <img src={Picture4} className="about-img 	d-lg-none d-xl-none" />
      </Container>
      <Container className="pt-5">
        <Row>
          <Col className="col-12 col-md-4">
            <AboutCard
              img={aboutImg}
              title="Our Goal"
              text="Impact students, and empower them to impact their communities through technology."
            />
          </Col>
          <Col className="col-12 col-md-4">
            <AboutCard
              img={vision}
              title="Our Vision"
              text="Google Developer Student Club help students bridge the gap between theory and practice."
            />
          </Col>
          <Col className="col-12 col-md-4">
            <AboutCard
              img={mission}
              title="Our Mission"
              text="Provide native app and web development skills for students to help them work towards employability."
            />
          </Col>
        </Row>
        <Row>
          <header className="text-center display-5 py-5">GDSC AT VIT-AP</header>
        </Row>
        <Row>
          <header className="text-center display-5 py-5">The Board</header>
        </Row>
        <Row>
          <Board />
        </Row>
      </Container>
    </animated.div>
  );
}

export default About;
