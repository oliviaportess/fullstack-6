import React from "react";

import draftLogo from "../images/draftLogo.png";
import NeonLink from "./NeonLink";
import "./Navbar.css";

const Navbar = () => { //arrow function is inputted by sfc
    return (
        <nav className="navbar">
            <a href="./"><img src={draftLogo} alt="logo"/></a>
            <NeonLink linkName="ABOUT" link="./ABOUT"/>
            <NeonLink linkName="SIGNUP" link="./SIGNUP"/>
            <NeonLink linkName="LOGIN" link="./LOGIN"/>
        </nav>
      );
};

export default Navbar;
