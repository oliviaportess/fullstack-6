import React from "react";
import "./UserScoreDisplay.css"; // Import the CSS specific to UserScoreDisplay

const UserScoreDisplay = ({ userScore }) => {
  return (
    <div className="user-score">
      <p>Your Score</p>
      <p className="score">{userScore}/10</p>
    </div>
  );
};

export default UserScoreDisplay;
