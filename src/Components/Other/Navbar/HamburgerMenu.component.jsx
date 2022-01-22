import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
const HamburgerMenu = () => {
  const menuShow = () => {
    setShowIcons(!showIcons);
  };
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="menu-icon">
      <ul
        className={
          showIcons
            ? "nav-links nav-active menu-animation nav-background nav-links-style"
            : "nav-unactive"
        }
      >
        <Link to="/" className="nav-link-black">
          <li
            className="underline nav-underline-red"
            style={{ animation: "navLinkFade 0.4s ease forwards 0.15s" }}
          >
            <span onClick={menuShow}>Home</span>
          </li>
        </Link>
        <Link to="/about" className="nav-link-black">
          <li
            className="underline nav-underline-green"
            style={{ animation: "navLinkFade 0.4s ease forwards 0.3s" }}
          >
            <span onClick={menuShow}>About</span>
          </li>
        </Link>
        <Link to="/projects" className="nav-link-black">
          <li
            className="underline nav-underline-blue"
            style={{ animation: "navLinkFade 0.4s ease forwards 0.45s" }}
          >
            <span onClick={menuShow}>Projects</span>
          </li>
        </Link>
        <Link to="/timeline" className="nav-link-black">
          <li
            className="underline nav-underline-yellow"
            style={{ animation: "navLinkFade 0.4s ease forwards 0.6s" }}
          >
            <span onClick={menuShow}>Timeline</span>
          </li>
        </Link>
        <Link to="/contact" className="nav-link-black">
          <li
            className="word-break"
            style={{ animation: "navLinkFade 0.5s ease forwards 0.75s" }}
          >
            <span onClick={menuShow}>Contact Us</span>
          </li>
        </Link>
      </ul>
      <button onClick={menuShow}>
        <div className={showIcons ? "burger toggle" : "burger"}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
