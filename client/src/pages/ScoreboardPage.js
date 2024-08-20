import React from 'react';
import { useSelector } from "react-redux";
import './UserScore.css';
import ScoreList from './ScoreList';
import UserScoreDisplay from './UserScoreDisplay';
import Navbar from "../components/Navbar"; // Import Navbar component
import BackgroundScreen from "../components/BackgroundScreen"; // Import BackgroundScreen component
import gridImage from "../images/grid.png"; // Import background image

const UserScore = ({ scores, userScore }) => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <div className="scoreboard-container">
      <Navbar /> {/* Add the Navbar for consistency */}
      <BackgroundScreen url={gridImage} /> {/* Add background styling */}
      <div className="scoreboard-content">
        <h2>Scoreboard</h2>
        <ScoreList scores={scores} />
        <UserScoreDisplay userScore={userScore} />
        <button className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default UserScore;
