import React from "react";
import { useSelector } from "react-redux";

import "./Question.css";

function Question() {
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const QUESTIONS = useSelector((state) => state.quiz.questions);

  const question = QUESTIONS[activeQuestionIndex].question;

  return <p className="question">{question}</p>;
}

export default Question;
