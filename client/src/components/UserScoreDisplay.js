import React from "react";
import { useSelector } from "react-redux";

import "./UserScoreDisplay.css";

const UserScoreDisplay = () => {
  const userScore = useSelector((state) => state.quiz.score);
  const totalQuestions = useSelector((state) => state.quiz.activeQuestionIndex);

  let userPercentage =
    totalQuestions > 0 ? (userScore / totalQuestions) * 100 : 0;

  return <p className="score">{userPercentage}%</p>;
};

export default UserScoreDisplay;
