import React from "react";
import "./ProgressBar.css";

// pass in progress props as updated by the redux state
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        data-testid="progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
