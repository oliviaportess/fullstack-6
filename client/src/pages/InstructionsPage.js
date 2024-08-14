import React from "react";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";

function InstructionsPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen />
        <div className="content">
          <MainHeading />
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
