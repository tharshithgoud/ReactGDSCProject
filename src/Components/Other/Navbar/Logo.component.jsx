import "./Navbar.styles.css";
import navbarlogo from "./Assets/logo.png";
import navbarmobilelogo from "./Assets/mobile.svg";

function Logo() {
  return (
    <div>
      <a className="nav-logo" href="#">
        <img src={navbarlogo} alt="navbarlogo" className="logo-desktop" />
        <img
          src={navbarmobilelogo}
          alt="navbarmobilelogo"
          className="logo-mobile"
        />
      </a>
    </div>
  );
}

export default Logo;
