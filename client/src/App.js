import "./App.css";

import Button from "./components/Button";
import MainHeading from "./components/MainHeading";

import DisplayTeam from "./components/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHeading title="Welcome" />
      <DisplayTeam />
      <Button text="Start quiz"/>

    </div>
  );
};

export default App;
