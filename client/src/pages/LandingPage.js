import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function LandingPage() {
  const [playerName, setPlayerName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const submittedName = inputValue.trim() === "" ? "Player" : inputValue;
    setPlayerName(submittedName);
    setInputValue("");
    setIsSubmitted(true);
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
        setPlayerName("");
      } else if (response.status === 201) {
        setApiMessage("");
        setPlayerName(submittedName);
      } else {
        setApiMessage(json.error || "Unknown Error: Please try again later.");
        setPlayerName("");
      }
    } catch (error) {
      console.error("Error submitting name:", error);
    }
  }

  function handleChange(event) {
    setApiMessage("");
    setIsSubmitted(true);
    if (/^[a-zA-Z\s]*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  }

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="Welcome to" />
          <MainHeading className="gradient-pink" title="Quiz App" />
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
              <Button
                type="submit"
                text="Submit"
                className="grey"
                id="name-submit-button"
              />
            </form>
          )}
          <Link to="/instructions">
            <Button
              text={`Let's get quizzing ${playerName}!`}
              type="link"
              className="big-font"
            />
          </Link>
        </div>
        <div className={`message-container ${apiMessage ? "show" : ""}`}>
          {apiMessage}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
