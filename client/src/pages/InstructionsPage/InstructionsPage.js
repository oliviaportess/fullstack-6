import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./InstructionsPage.css";

import MainHeading from "../../components/MainHeading/MainHeading";
import QuizForm from "../../components/quiz/QuizForm/QuizForm";
import Button from "../../components/Button/Button";

function InstructionsPage() {
  const questions = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);
  const isWaiting = useSelector((state) => state.api.isWaiting);

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
          <QuizForm text={isWaiting ? "Loading..." : "Submit"} />
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
