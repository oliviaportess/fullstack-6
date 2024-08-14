import React from "react";
import { Link } from "react-router-dom";

import "./InstructionsPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import QuizForm from "../components/quiz/QuizForm";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function InstructionsPage() {
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
                  <p>Use the form on the right to generate your own quiz</p>
                </li>
                <br></br>
                <li className="list-instructions">
                  <p>
                    Select the number of questions (between 5 and 20), the
                    category, difficulty, and the type of quiz you would like to
                    play
                  </p>
                </li>
                <br></br>
                <li className="list-instructions">
                  <p>Press Submit then Start the Quiz!</p>
                </li>
              </ol>
            </div>
            <QuizForm />
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
