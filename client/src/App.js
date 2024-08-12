import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./components/About";

// import Button from "./components/Button";
// import MainHeading from "./components/MainHeading";
// import BackgroundScreen from "./components/BackgroundScreen";
// import gridImage from "./images/grid.png";
// import DisplayTeam from "./components/Team";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
