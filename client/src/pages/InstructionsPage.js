import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { quizActions } from "../components/quiz/quizReducer.js";
import { apiActions } from "../components/quiz/apiReducer.js";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function InstructionsPage() {
  const dispatch = useDispatch();

  const performSearch = async () => {
    dispatch(apiActions.trueIsFetching());
    const result = await fetch("/api/search/");
    const jsonResponse = await result.json();
    dispatch(quizActions.saveQuestions(jsonResponse));
    dispatch(apiActions.falseIsFetching());
  };

  function handleClick() {
    performSearch();
  }

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="How to Play" />
          <Link to="/quiz">
            <Button text="Generate Quiz" type="link" onClick={handleClick} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
