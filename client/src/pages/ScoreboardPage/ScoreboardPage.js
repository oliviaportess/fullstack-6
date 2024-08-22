import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ScoreboardPage.css";
import { quizFormActions } from "../../components/quiz/QuizForm/quizFormReducer";

import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import UserScoreDisplay from "../../components/UserScoreDisplay/UserScoreDisplay";

function ScoreboardPage() {
  // Reset the background image
  const dispatch = useDispatch();
  dispatch(quizFormActions.reset());

  const { state } = useLocation();

  // Hardcoded user data
  const users = [
    { rank: 1, name: "User 4", score: 8 },
    { rank: 2, name: "User 3", score: 7 },
    { rank: 3, name: "User 1", score: 6 },
    { rank: 4, name: "User 2", score: 5 },
    { rank: 5, name: "User 6", score: 4 },
    { rank: 6, name: "User 5", score: 3 },
  ];

  if (state && state.fromLandingPage) {
    return (
      <>
        <div className="content">
          <div className="layout">
            <div className="score-display">
              <MainHeading title="Scoreboard" />
              {users.map((user) => (
                <div key={user.rank} className="score-item">
                  <span className="rank">{user.rank}.</span>
                  <span className="name">{user.name}</span>
                </div>
              ))}
            </div>
            <div className="your-score">
              <UserScoreDisplay />
            </div>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">
            <Button text="BACK TO HOME" className="button-position" />
          </Link>
        </div>
      </>
    );
  }

  return <Navigate to="/" />;
}

export default ScoreboardPage;
