import React from "react";
import { useSelector } from "react-redux";

function Question() {
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const QUESTIONS = useSelector((state) => state.quiz.questions);

  const question = QUESTIONS[activeQuestionIndex].question;

  return <p>{question}</p>;
}

export default Question;
