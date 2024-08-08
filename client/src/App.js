import './App.css';
import Button from './utils/Button';
import DisplayTeam from './utils/Team';
import Navbar from './utils/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DisplayTeam />
      <Button text="START QUIZ"/>
    </div>
  );
}

export default App;
