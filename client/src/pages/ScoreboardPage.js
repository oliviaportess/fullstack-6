import React from 'react';
import './UserScore.css';
import './ScoreList.css';
import './UserScoreDisplay.css';

// ScoreList Component
const ScoreList = ({ scores }) => {
  return (
    <ul className="score-list">
      {scores.map((user, index) => (
        <li key={index}>
          <span className="rank">{index + 1}.</span>
          <span className="username">{user}</span>
        </li>
      ))}
    </ul>
  );
};

// UserScoreDisplay Component
const UserScoreDisplay = ({ userScore }) => {
  return (
    <div className="user-score">
      <p>Your Score</p>
      <p className="score">{userScore}/10</p>
    </div>
  );
};

// Main UserScore Component
const UserScore = ({ scores, userScore }) => {
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <ScoreList scores={scores} />
      <UserScoreDisplay userScore={userScore} />
      <button className="back-button">Back to Home</button>
    </div>
  );
};

export default UserScore;