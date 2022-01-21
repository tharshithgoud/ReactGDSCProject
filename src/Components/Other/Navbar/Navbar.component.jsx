import React from "react";
import Media from "react-media";
import Logo from "./Logo.component";
import Menu from "./Menu.component";
import HamburgerMenu from "./HamburgerMenu.component";
import { Fragment } from "react/cjs/react.production.min";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Logo />
        <Media
          queries={{
            small: "(max-width: 1280px)",
            medium: "(min-width: 1280px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <HamburgerMenu />}
              {matches.medium && <Menu />}
            </Fragment>
          )}
        </Media>
      </nav>
    </div>
  );
};

export default Navbar;
