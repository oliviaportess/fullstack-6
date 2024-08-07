import './App.css';
import DisplayTeam from './team';
import Button from './utils/Button';
import MainHeading from './utils/MainHeading';

function App() {
  return (
    <div className="App">
      <MainHeading title="Welcome" />
      <DisplayTeam />
      <Button text="Start quiz"/>
    </div>
  );
}

export default App;
