import React from "react";

// import draftLogo from "../../images/draftLogo.png";
import NeonLink from "./NeonLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <NeonLink
        className="neon-pink"
        linkName="TRIVIAGO"
        link="./"
        iconClass="fa-solid fa-gamepad"
      />
      <NeonLink className="neon-blue" linkName="ABOUT" link="./about" />
    </nav>
  );
};

export default Navbar;
