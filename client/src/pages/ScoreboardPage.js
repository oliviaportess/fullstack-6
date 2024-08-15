import React from 'react';
import './UserScore.css'; // Import the CSS specific to UserScore
import ScoreList from './ScoreList';
import UserScoreDisplay from './UserScoreDisplay';

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