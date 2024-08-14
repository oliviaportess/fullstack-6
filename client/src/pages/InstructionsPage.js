import React from "react";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function InstructionsPage() {
  function handleClick() {}

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="How to Play" />
          <Button text="Generate Quiz" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
