import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { quizActions } from "../../components/quiz/quizReducer";
import { quizFormActions } from "../../components/quiz/QuizForm/quizFormReducer";
import "./LandingPage.css";

import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import BrowserTab from "../../components/BrowserTab";

function LandingPage() {
  // const [playerName, setPlayerName] = useState(""); using redux instead
  const name = useSelector((state) => state.quiz.name);
  const [inputValue, setInputValue] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // added useEffect hook to ensure dispatch call only occurs once
    dispatch(quizActions.reset());
    dispatch(quizActions.resetName());
    dispatch(quizFormActions.reset());
  }, [dispatch]);

  async function handleSubmit(event) {
    event.preventDefault();
    const submittedName = inputValue.trim();
    setInputValue("");
    event.target.reset();

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: submittedName }),
      });

      const json = await response.json();

      if (response.status === 400) {
        setApiMessage(json.message || json.error);
        dispatch(quizActions.setName(""));
        setIsSubmitted(false);
      } else if (response.status === 201) {
        setApiMessage("");
        dispatch(quizActions.setName(submittedName));
        setIsSubmitted(true);
      } else {
        setApiMessage(json.error || "Unknown Error: Please try again later");
        dispatch(quizActions.setName(""));
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error submitting name:", error);
      setIsSubmitted(false);
    }
  }

  function handleChange(event) {
    setApiMessage("");
    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  }

  function handleButtonClick() {
    if (!isSubmitted) {
      setApiMessage("You need a valid name to proceed");
    }
  }

  return (
    <>
      <BrowserTab title="Triviago" />
      <div className="content">
        <MainHeading title="Welcome to" />
        <MainHeading className="gradient-pink" title="Triviago" />
        {!isSubmitted && (
          <form id="name-form" onSubmit={handleSubmit}>
            <label htmlFor="player-name">
              <MainHeading className="heading-small" title="Enter Name" />
            </label>
            <input
              type="text"
              id="player-name"
              placeholder="Write your name"
              className="form-input-field"
              onChange={handleChange}
              autoComplete="name"
              maxLength="20"
              required
            ></input>
            <Button type="submit" text="Submit" className="grey" />
          </form>
        )}
        <Link to={isSubmitted ? "/instructions" : "#"}>
          <Button
            text={`Let's get quizzing ${name}!`}
            type="link"
            className="big-font"
            onClick={handleButtonClick}
          />
        </Link>
      </div>
      <div className={`message-container ${apiMessage ? "show" : ""}`}>
        {apiMessage}
      </div>
    </>
  );
}

export default LandingPage;
