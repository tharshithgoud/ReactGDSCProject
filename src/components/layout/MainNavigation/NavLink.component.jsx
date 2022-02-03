import React from "react";
import { Link } from "react-router-dom";
function NavLink(props) {
  function activate(e) {
    props.toggle();
    props.toggleHam();
  }
  const cssClass =
    "px-xl-5 py-sm-4 py-4 nav-pad  link nav-links-forward nav-underline-none center-text-nav";
  return (
    <Link
      className={cssClass}
      id="nav-pad-id"
      to={props.link}
      onClick={() => {
        if (window.matchMedia("(max-width: 992px)").matches) activate();
      }}
    >
      <span className={"nav-link-black text-center " + props.cssClass}>
        <center>
          <strong>{props.name}</strong>
        </center>
      </span>
    </Link>
  );
}

export default NavLink;
