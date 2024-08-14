import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function InstructionsPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="How to Play" />
          <Link to="/">
            <Button text="Back" className="grey" />
          </Link>
          <Link to="/quiz">
            <Button text="Generate Quiz" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
