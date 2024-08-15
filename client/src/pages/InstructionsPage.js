import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { quizActions } from "../components/quiz/quizReducer.js";
import { apiActions } from "../components/quiz/apiReducer.js";

import "./InstructionsPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import QuizForm from "../components/quiz/QuizForm";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function InstructionsPage() {
  const dispatch = useDispatch();
  // const performSearch = async (quizSettings) => {
  const performSearch = async () => {
    // const query = new URLSearchParams({
    //   amount: quizSettings.numberOfQuestions,
    //   category: quizSettings.category || "",
    //   difficulty: quizSettings.difficulty || "",
    //   type: quizSettings.type || "",
    // }).toString();

    dispatch(apiActions.trueIsFetching());
    // Change search params
    // const result = await fetch(`/api/search/?${query}`);
    const result = await fetch(`/api/search/`);
    const jsonResponse = await result.json();
    dispatch(quizActions.saveQuestions(jsonResponse));
    dispatch(apiActions.falseIsFetching());
  };

  function handleFormSubmit() {
    performSearch();
  }

  // perform search using quizSettings?
  // function handleFormSubmit(quizSettings) {
  //   performSearch(quizSettings);
  // }

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
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
                  Select the number of questions (between 5 and 20), the
                  category, difficulty, and the type of quiz you would like to
                  play
                </li>
                <br></br>
                <li className="list-instructions">
                  Press Submit then Start the Quiz!
                </li>
              </ol>
            </div>
            <QuizForm onSubmit={handleFormSubmit} />
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">
            <Button text="Back" className="grey" />
          </Link>
          <Link to="/quiz">
            <Button text="Start Quiz" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
