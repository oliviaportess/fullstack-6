import React from "react";
import { useSelector } from "react-redux";

import "./AnswerButton.css";

function AnswerButton({ onSelectAnswer, text, cssStyles }) {
  const answerState = useSelector((state) => state.quiz.answerState);

  return (
    <button
      disabled={answerState !== ""}
      onClick={onSelectAnswer}
      className={(".", cssStyles)}
    >
      {text}
    </button>
  );
}

export default AnswerButton;
