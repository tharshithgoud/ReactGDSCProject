import React from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="nav-links nav-links-style">
      <Link to="/" className="nav-link-black">
        <li className="underline nav-underline-red btn ">
          <span>Home</span>
        </li>
      </Link>
      <Link to="/about" className="nav-link-black">
        <li className="underline nav-underline-green btn">
          <span>About</span>
        </li>
      </Link>
      <Link to="/projects" className="nav-link-black">
        <li className="underline nav-underline-blue btn">
          <span>Projects</span>
        </li>
      </Link>
      <Link to="/timeline" className="nav-link-black">
        <li className="underline nav-underline-yellow btn">
          <span>Timeline</span>
        </li>
      </Link>
      <Link to="/contact" className="nav-link-black">
        <li className="word-break btn">Contact Us</li>
      </Link>
    </ul>
  );
}

export default Menu;
