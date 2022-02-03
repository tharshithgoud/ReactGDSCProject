import { Nav } from "react-bootstrap";
import NavLink from "./NavLink.component";

function NavLinks(props) {
  return (
    <Nav className="ms-auto">
      <NavLink
        name="Home"
        cssClass="nav-underline-red"
        link="/"
        toggle={props.toggle}
        toggleHam={props.toggleHam}
      />
      <NavLink
        name="About"
        cssClass="nav-underline-green"
        link="/about"
        toggle={props.toggle}
        toggleHam={props.toggleHam}
      />
      <NavLink
        name="Team"
        cssClass="nav-underline-blue"
        link="/team"
        toggle={props.toggle}
        toggleHam={props.toggleHam}
      />
      <NavLink
        name="Timeline"
        cssClass="nav-underline-yellow"
        link="/timeline"
        toggle={props.toggle}
        toggleHam={props.toggleHam}
      />
      <NavLink
        name="Blog"
        link="/blog"
        cssClass= "nav-underline-none"
        toggle={props.toggle}
        toggleHam={props.toggleHam}
      />
    </Nav>
  );
}

export default NavLinks;
