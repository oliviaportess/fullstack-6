import React from "react";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import gridImage from "../images/grid.png";
import MainHeading from "../components/MainHeading";

function QuizPage() {

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
            <MainHeading title="Question number placeholder" />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
