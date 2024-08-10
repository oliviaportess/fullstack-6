import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";

// import Button from "./components/Button";
// import MainHeading from "./components/MainHeading";

// import DisplayTeam from "./components/Team";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
