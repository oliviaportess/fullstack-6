import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { quizActions } from "../components/quiz/quizReducer.js";
import { apiActions } from "../components/quiz/apiReducer.js";

import "./InstructionsPage.css";

import MainHeading from "../components/MainHeading";
import QuizForm from "../components/quiz/QuizForm";
import Button from "../components/Button";

function InstructionsPage() {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);

  // const performSearch = async (quizSettings) => {
  const performSearch = async () => {
    // const query = new URLSearchParams({
    //   amount: quizSettings.numberOfQuestions,
    //   category: quizSettings.category || "",
    //   difficulty: quizSettings.difficulty || "",
    //   type: quizSettings.type || "",
    // }).toString();

    dispatch(quizActions.reset());
    dispatch(apiActions.trueIsFetching());
    // Change search params
    // const result = await fetch(`/api/search/?${query}`);
    const result = await fetch(`/api/search/`);
    const jsonResponse = await result.json();
    dispatch(quizActions.saveQuestions(jsonResponse));
    setTimeout(() => {
      dispatch(apiActions.falseIsFetching());
    }, 5000);
  };

  function handleFormSubmit() {
    if (isFetching) {
      return;
    }
    performSearch();
  }

  // perform search using quizSettings?
  // function handleFormSubmit(quizSettings) {
  //   performSearch(quizSettings);
  // }

  return (
    <>
      <div className="content">
        <MainHeading title="How to Play" />
        <div className="instructions-layout">
          <div className="instructions">
            <MainHeading title="Instructions" className="heading-small" />
            <ol>
              <li className="list-instructions">
                Use the form on the right to generate your own quiz
              </li>
              <br></br>
              <li className="list-instructions">
                Select the number of questions (between 5 and 20), the category,
                difficulty, and the type of quiz you would like to play
              </li>
              <br></br>
              <li className="list-instructions">
                Press Submit then Start the Quiz!
              </li>
            </ol>
          </div>
          <QuizForm
            text={isFetching ? "Loading..." : "Submit"}
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">
          <Button text="Back" className="grey" />
        </Link>
        <Link to="/quiz">
          <Button
            text="Start Quiz"
            isDisabled={questions.length === 0 || isFetching}
          />
        </Link>
      </div>
    </>
  );
}

export default InstructionsPage;
