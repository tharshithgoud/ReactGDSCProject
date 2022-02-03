import { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Arrow from "../../Assets/down-arrow.png";

function HomeArrow() {
  const scroll = useRef();

  function scrollClick() {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Row className="py-5">
      <Col className="text-center mt-4" ref={scroll}>
        <img
          src={Arrow}
          className="arrow-img arrow-inf-animate"
          onClick={scrollClick}
          style={{ cursor: "pointer" }}
          alt=""
        />
      </Col>
    </Row>
  );
}

export default HomeArrow;
