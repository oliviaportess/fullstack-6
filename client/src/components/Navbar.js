import React from "react";

import draftLogo from "../images/draftLogo.png";
import NeonLink from "./NeonLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="./">
        <img src={draftLogo} alt="logo" />
      </a>
      <NeonLink linkName="ABOUT" link="./ABOUT" />
    </nav>
  );
};

export default Navbar;