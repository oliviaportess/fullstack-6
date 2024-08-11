import React from "react";
import "./LandingPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="Welcome to" />
          <Button text="Let's get quizzing!" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
