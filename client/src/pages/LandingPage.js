import React from "react";
import "./LandingPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="Welcome to" />
          <MainHeading className="gradient-pink" title="Quiz App" />
          <div id="name-form">
            <label htmlFor="player-name">
              <MainHeading className="heading-small" title="Enter Name" />
            </label>
            <input
              type="text"
              id="player-name"
              placeholder="Write your name"
              className="form-input-box"
            ></input>
            <Button type="submit" text="Submit" className="grey" />
          </div>
          <Button text="Let's get quizzing!" className="big-font" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
