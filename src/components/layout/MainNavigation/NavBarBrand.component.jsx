import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarBrand(props) {
  function activate() {
    props.toggle();
    props.hamToggle();
  }
  const cssAnimation = { animation: "navLinkFade 0.6s ease forwards 0s" };
  return (
    <Navbar.Brand className={props.cssNavClass} style={cssAnimation}>
      <Link to="/">
        <img
          src={props.logo}
          className={props.cssImgClass+" ml-3"}
          alt="GDSC-LOGO"
          onClick={() => {
            if (window.matchMedia("(max-width: 992px)").matches) activate();
          }}
        />
      </Link>
    </Navbar.Brand>
  );
}

export default NavBarBrand;
