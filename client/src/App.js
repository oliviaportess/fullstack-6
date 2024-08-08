import './App.css';

import Button from './utils/Button';
import MainHeading from './utils/MainHeading';

import DisplayTeam from './utils/Team';
import Navbar from './utils/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHeading title="Welcome" />
      <DisplayTeam />
      <Button text="Start quiz"/>

    </div>
  );
}

export default App;
