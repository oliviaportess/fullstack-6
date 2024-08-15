import React from "react";
//import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { quizActions } from "./quizReducer.js";
import AnswerButton from "./AnswerButton";
//import QUESTIONS from "../../data/questions.js";

function AnswerOptions() {
  //const shuffledAnswers = useRef();
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const answerState = useSelector((state) => state.quiz.answerState);
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);
  const QUESTIONS = useSelector((state) => state.quiz.questions);

  // if (!shuffledAnswers.current) {
  //   shuffledAnswers.current = [
  //     ...QUESTIONS[activeQuestionIndex].incorrect_answers,
  //     QUESTIONS[activeQuestionIndex].correct_answer,
  //   ];
  //   shuffledAnswers.current.sort(() => Math.random() - 0.5);
  //   // Returns a random positive or negative number for each comparison in the array so the sort method randomly sorts the array
  // }

  function handleSelectAnswer(selectedAnswer) {
    dispatch(quizActions.addUserAnswer(selectedAnswer));
    dispatch(quizActions.setSelectedAnswer(selectedAnswer));
    if (selectedAnswer === QUESTIONS[activeQuestionIndex].correctAnswer) {
      dispatch(quizActions.correctAnswerState());
    } else {
      dispatch(quizActions.wrongAnswerState());
    }
  }

  return (
    <ul id="answers">
      {QUESTIONS[activeQuestionIndex].answerOptions.map((answer) => {
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
