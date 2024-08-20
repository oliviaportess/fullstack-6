import React from "react";
import { useSelector } from "react-redux";

import "./Question.css";

function Question() {
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const QUESTIONS = useSelector((state) => state.quiz.questions);

  const question =
    QUESTIONS && QUESTIONS.length > 0 && QUESTIONS[activeQuestionIndex].question
      ? QUESTIONS[activeQuestionIndex].question
      : "Ooops... no question found.";

  return <p className="question">{question}</p>;
}

export default Question;
