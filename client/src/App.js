import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import InstructionsPage from "./pages/InstructionsPage/InstructionsPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ScoreboardPage from "./pages/ScoreboardPage/ScoreboardPage";
import Navbar from "./components/NavBar/Navbar";
import BackgroundScreen from "./components/BackgroundScreen/BackgroundScreen";

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
              {/* default redirect to home page */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
