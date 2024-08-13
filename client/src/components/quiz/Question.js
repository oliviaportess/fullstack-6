import React from "react";
import { useSelector } from "react-redux";

import QUESTIONS from "../../data/questions";

function Question() {
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const question = QUESTIONS[activeQuestionIndex].question;

  return <p>{question}</p>;
}

export default Question;
