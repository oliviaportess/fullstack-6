import React from "react";
import { useSelector } from "react-redux";

import "./Question.css";

function Question() {
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const questions = useSelector((state) => state.quiz.questions);

  const question =
    questions && questions.length > 0 && questions[activeQuestionIndex].question
      ? questions[activeQuestionIndex].question
      : "Ooops... no question found.";

  return <p className="question">{question}</p>;
}

export default Question;
