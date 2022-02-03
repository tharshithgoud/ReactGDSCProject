import { Container, Row, Col } from "react-bootstrap";
import "./Home.styles.css";
import { useSpring, animated } from "react-spring";
import ContactUsImg from "../../Assets/contactus_graphic.png";
import HomeArrow from "../../components/Home/HomeArrow.component";
import HomeA from "../../components/Home/HomeA.component";
import HomeB from "../../components/Home/HomeB.component";
import EventHighlights from "../../components/Home/EventHighlights.component";
import ContactForm from "../../components/Home/ContactForm.component";

const Home = () => {
  const spr = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
    delay: 400,
  });
  return (
    <animated.div style={spr}>
      <div className="mt-5 ">
        <Container>
          <HomeA />
          <HomeArrow />
          <HomeB />
          <EventHighlights />
          <Row>
            <header className="display-5 text-center py-5 fw-bold">
              Contact Us
            </header>
          </Row>
          <Row>
            <Col className="col-12 col-lg-6 my-lg-5 py-lg-5">
              <Row className="mx-auto">
                <img
                  src={ContactUsImg}
                  style={{ width: "350px" }}
                  className="mx-auto"
                />
              </Row>
            </Col>
            <ContactForm />
          </Row>
        </Container>
      </div>
    </animated.div>
  );
};

export default Home;
