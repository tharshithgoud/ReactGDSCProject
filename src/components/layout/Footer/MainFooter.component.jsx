import React from "react";
import DesktopFooter from "./DesktopFooter.component";
import MobileFooter from "./MobileFooter.component";

import "./MainFooter.styles.css";
function MainFooter() {
  return (
    <div>
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
}

export default MainFooter;
