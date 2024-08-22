import React from "react";
import { useSelector } from "react-redux";

import "./UserScoreDisplay.css";

const UserScoreDisplay = () => {
  const userScore = useSelector((state) => state.quiz.score);
  const totalQuestions = useSelector((state) => state.quiz.activeQuestionIndex);
  return (
    <p className="score">
      {userScore}/{totalQuestions}
    </p>
  );
};

export default UserScoreDisplay;
