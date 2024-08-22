import React from "react";
import "./UserScoreDisplay.css"; // Import the CSS specific to UserScoreDisplay
import { useSelector } from "react-redux";

const UserScoreDisplay = () => {
  const userScore = useSelector((state) => state.quiz.score)
  const totalQuestions = useSelector((state) => state.quiz.activeQuestionIndex)
  return (
    <div className="user-score">
      <p>Your Score</p>
      <p className="score">{userScore}/{totalQuestions}</p>
    </div>
  );
};

export default UserScoreDisplay;
