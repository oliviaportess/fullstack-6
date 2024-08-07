import './App.css';
import DisplayTeam from './team';
import Button from './utils/Button';
import MainHeading from './utils/MainHeading';

function App() {
  return (
    <div className="App">
      <DisplayTeam />
      <Button text="START QUIZ"/>
    </div>
  );
}

export default App;
