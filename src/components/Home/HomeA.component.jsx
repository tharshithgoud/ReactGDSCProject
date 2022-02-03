import { Row, Col } from "react-bootstrap";
import Home1 from "../../Assets/home-page-content-logo.png";
function HomeA() {
  return (
    <Row>
      <Col className="col-12 col-md-6 text-center">
        <img
          src={Home1}
          alt="Home GDSC Logo"
          className="home-img pt-0 mt-md-3 pt-md-4 pt-lg-5 img-fluid"
        />
      </Col>
      <Col className="col-12 col-md-6 text-center">
        <p className="home-text-first pt-5 pt-md-3 mt-xl-4  text-xl-start">
          At GDSC VIT-AP we help students to bridge the gap between conventional
          education and practical implementation. It empowers students to build
          and achieve amazing feats.
        </p>
        <div class="text-center mt-4">
          <a
            className="btn btn-primary rounded-pill py-2 px-3 fs-6 text-capitalize "
            href="https://gdsc.community.dev/vellore-institute-of-technology-ap-campus/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Be a Member
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default HomeA;
