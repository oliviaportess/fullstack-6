import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { quizFormActions } from "../../components/quiz/QuizForm/quizFormReducer";

import "./ScoreboardPage.css";

import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import ScoreList from "../../components/ScoreList/ScoreList";
import UserScoreDisplay from "../../components/UserScoreDisplay/UserScoreDisplay";

function ScoreboardPage() {
  // Reset the background image
  const dispatch = useDispatch();
  dispatch(quizFormActions.reset());
  const { state } = useLocation();

  return (
    <>
      <div className="content">
        <div className="scoreboard-layout">
          <div className="scoreboard-display">
            <MainHeading title="Scoreboard" />
            <ScoreList />
          </div>
          {state && state.fromLandingPage && (
            <div className="user-score">
              <MainHeading title="Your Score" />
              <UserScoreDisplay />
            </div>
          )}
        </div>
      </div>
      <div className="scoreboard-back-button">
        <Link to="/">
          <Button text="Back to Home" />
        </Link>
      </div>
    </>
  );
}

export default ScoreboardPage;
