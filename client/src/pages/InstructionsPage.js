import React from "react";
import { Link } from "react-router-dom";

import "./InstructionsPage.css";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
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
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li>
                  <p>
                    Donec a nunc gravida, mollis ipsum in, condimentum erat.
                  </p>
                </li>
                <li>
                  <p>Nam id justo lacinia, aliquet mauris sed, auctor neque.</p>
                </li>
              </ol>
            </div>
            <form></form>
          </div>
          <div className="nav-links">
            <Link to="/">
              <Button text="Back" className="grey" />
            </Link>
            <Link to="/quiz">
              <Button text="Generate Quiz" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsPage;
