import React from "react";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import gridImage from "../images/grid.png";
import TenQuestionSearch from "../components/TenQuestionSearch";

function QuestionPage() {

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
            <TenQuestionSearch />
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
