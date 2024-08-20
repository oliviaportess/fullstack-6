import React from "react";

import "./AnswerButton.css";

function AnswerButton({ onSelectAnswer, text, cssStyles, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onSelectAnswer}
      className={`answer-button ${cssStyles}`}
    >
      {text}
    </button>
  );
}

export default AnswerButton;
