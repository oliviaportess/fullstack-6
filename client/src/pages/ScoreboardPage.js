import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { quizFormActions } from "../components/quiz/quizFormReducer";

import "./ScoreboardPage.css";

import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import ScoreList from "../components/ScoreList";
import UserScoreDisplay from "../components/UserScoreDisplay";

function ScoreboardPage() {
  // Reset the background image
  const dispatch = useDispatch();
  dispatch(quizFormActions.reset());

  return (
    <>
      <div className="content">
        <div className="scoreboard-layout">
          <div className="scoreboard-display">
            <MainHeading title="Scoreboard" />
            <ScoreList />
          </div>
          <div className="user-score">
            <MainHeading title="Your Score" />
            <UserScoreDisplay />
          </div>
        </div>
      </div>
      <div className="scoreboard-back-button">
        <Link to="/">
          <Button text="Back to Home" />
        </Link>
      </div>

      {/* <div className="layout">
        <div className="score-display">
          <MainHeading title="Scoreboard" />
          {users.map((user) => (
            <div key={user.rank} className="score-item">
              <span className="rank">{user.rank}.</span>
              <span className="name">{user.name}</span>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default ScoreboardPage;
