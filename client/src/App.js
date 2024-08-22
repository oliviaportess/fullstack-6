import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import InstructionsPage from "./pages/InstructionsPage";
import QuizPage from "./pages/QuizPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import Navbar from "./components/Navbar";
import BackgroundScreen from "./components/BackgroundScreen";

import gridImage from "./images/grid.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="layout-container">
          <BackgroundScreen url={gridImage} />
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/instructions" element={<InstructionsPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/scoreboard" element={<ScoreboardPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
