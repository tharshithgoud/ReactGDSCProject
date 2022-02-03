import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterIntLink(props) {
  return (
    <Row>
      <Link
        to = {props.link}
        style={{ color: "black" }}
        className=" fs-5 pt-1 text-decoration-none"
      >
        {props.name}
      </Link>
    </Row>
  );
}

export default FooterIntLink;
