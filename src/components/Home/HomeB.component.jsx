import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home2 from "../../Assets/home-2.png";

function HomeB() {
  return (
    <Row>
      <Col className="col-12 col-md-6 order-2 order-md-1 text-center">
        <header className="display-5 pt-5 pt-lg-3">Our Focus</header>
        <p className="home-text-first pt-4 pt-md-3 mt-xl-4 text-xl-start">
          Our main focus is to learn, teach and inspire. Our Community will
          allow students to garner additional skills and also implement them in
          computing their projects along with guiding pointers provided by the
          club.
        </p>
        <div class=" mt-4">
          <Link to="/team" className="btn btn-primary rounded-pill py-2 px-3 fs-6 text-capitalize"> Meet The Team</Link>
          {/* <a
            type="button"
            className="btn btn-primary rounded-pill px-3 fs-6 text-capitalize"
            href="https://gdsc.community.dev/vellore-institute-of-technology-ap-campus/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Meet the team
          </a> */}
        </div>
      </Col>
      <Col className="col-12 col-md-6 text-center order-1 order-md-2">
        <img
          src={Home2}
          alt="Home GDSC Logo"
          className="home-img pt-0 mt-md-5 mt-lg-3 pt-md-5 pt-lg-5 img-fluid "
        />
      </Col>
    </Row>
  );
}

export default HomeB;
