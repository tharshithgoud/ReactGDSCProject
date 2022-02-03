import { Navbar } from "react-bootstrap";
import "./MainNavigation.styles.css";
import NavContainer from "./NavContainer.component";
import { useState } from "react";

function MainNavigation() {
  function toggle() {
    setExpanded(!expanded);
  }
  function brandToggle() {
    if (expanded) {
      setExpanded(false);
    }
  }

  const cssNavbarStyle = {
    paddingBottom: "0px",
    paddingTop: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    boxShadow: "0px 2px 0px 2px rgba(102, 156, 247, 0.85)",
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      style={cssNavbarStyle}
      sticky="top"
      bg="white"
      expanded={expanded}
    >
      <NavContainer toggle={toggle} toggleBrand = {brandToggle}/>
    </Navbar>
  );
}

export default MainNavigation;
