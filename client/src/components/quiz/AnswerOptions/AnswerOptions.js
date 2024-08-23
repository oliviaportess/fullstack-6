import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quizActions } from "../quizReducer.js";
import AnswerButton from "../AnswerButton/AnswerButton";
import "./AnswerOptions.css";

function AnswerOptions() {
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const answerState = useSelector((state) => state.quiz.answerState);
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);
  const questions = useSelector((state) => state.quiz.questions);

  function handleSelectAnswer(selectedAnswer) {
    dispatch(quizActions.addUserAnswer(selectedAnswer));
    dispatch(quizActions.setSelectedAnswer(selectedAnswer));
    if (selectedAnswer === questions[activeQuestionIndex].correctAnswer) {
      dispatch(quizActions.correctAnswerState());
      dispatch(quizActions.incrementScore());
    } else {
      dispatch(quizActions.wrongAnswerState());
    }
  }

  return (
    <ul id="answers">
      {questions[activeQuestionIndex].answerOptions.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssStyles = "";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssStyles = answerState;
        }

        return (
          <li key={answer}>
            <AnswerButton
              onSelectAnswer={() => handleSelectAnswer(answer)}
              text={answer}
              cssStyles={cssStyles}
              disabled={!isSelected && answerState != ""}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default AnswerOptions;
