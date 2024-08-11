import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";

<<<<<<< HEAD
// import Button from "./components/Button";
// import MainHeading from "./components/MainHeading";
=======
import Button from "./components/Button";
import MainHeading from "./components/MainHeading";
import BackgroundScreen from "./components/BackgroundScreen";
import gridImage from "./images/grid.png";
>>>>>>> 9a2c02d797e69a8d1756899125de373c242ded5b

// import DisplayTeam from "./components/Team";
// import Navbar from "./components/Navbar";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
=======
    <div className="App">
      <Navbar />
      <BackgroundScreen url={gridImage} />
      <MainHeading title="Welcome" />
      <DisplayTeam />
      <Button text="Start quiz" />
    </div>
>>>>>>> 9a2c02d797e69a8d1756899125de373c242ded5b
  );
}

export default App;
