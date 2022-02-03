import logo from "../../../Assets/desktop-logo.png";
import mobile from "../../../Assets/mobile-logo.svg";
import { Spin as Hamburger } from "hamburger-react";
import { Navbar, Container } from "react-bootstrap";
import NavLinks from "./NavLinks.component";
import NavBarBrand from "./NavBarBrand.component";
import { useState } from "react";

function NavContainer(props) {
  function toggleHam() {
    setOpen(!isOpen);
  }
  function brandToggleHam() {
    if (isOpen) {
      setOpen(false);
    }
  }
  
  const [isOpen, setOpen] = useState(false);
  return (
    <Container fluid>
      <NavBarBrand
        logo={logo}
        cssNavClass="d-none d-md-block"
        cssImgClass="desktop-logo-size"
        toggle={props.toggle}
        hamToggle={brandToggleHam}
      />
      <NavBarBrand
        logo={mobile}
        cssNavClass="d-md-none"
        toggle={props.toggleBrand}
        hamToggle={brandToggleHam}
      />
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ border: "0px", padding: "0px" }}
        onClick={props.toggle}
      >
        <Hamburger
          rounded
          hideOutline={false}
          duration={0.7}
          toggled={isOpen}
          toggle={setOpen}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavLinks toggle={props.toggle} toggleHam={toggleHam} />
      </Navbar.Collapse>
    </Container>
  );
}

export default NavContainer;
