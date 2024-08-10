import React from "react";

import "./App.css";

import Button from "./components/Button";
import MainHeading from "./components/MainHeading";
import BackgroundScreen from "./components/BackgroundScreen";
import gridImage from "./images/grid.png";

import DisplayTeam from "./components/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundScreen url={gridImage} />
      <MainHeading title="Welcome" />
      <DisplayTeam />
      <Button text="Start quiz" />
    </div>
  );
}

export default App;
