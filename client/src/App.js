import './App.css';
import jacquelynPhoto from './images/jacquelyn.jpg';
import oliviaPhoto from './images/olivia.jpg';
import paolaPhoto from './images/paola.png';
import phoebePhoto from './images/phoebe.jpeg';

function App() {
  return (
    <div className="App">
      <h1>Team Introduction</h1>
      <div>
        <h2 className="yourName">Jacquelyn</h2>
        <img src={jacquelynPhoto} alt="Jacquelyn" />
        <ul>
          <li>
            <p className="about">
              My favourite hobby is swimming.
            </p>
          </li>
          <li>
            <p>
              I do this as it is refreshing and it is good for my breathing.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="yourName">Olivia</h2>
        <img src={oliviaPhoto} alt="Olivia" />
        <ul>
          <li>
            <p className="about">
              I love hiking, my favourite hike to date was the Milford Track in New Zealand.
            </p>
          </li>
          <li>
            <p>
              Being outdoors and connecting with nature helps me ground myself.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="yourName">Paola</h2>
        <img src={paolaPhoto} alt="Paola" />
        <ul>
          <li>
            <p className="about">
              I love cooking, but I love eating even more!
            </p>
          </li>
          <li>
            <p>
              Experimenting with new recipes and flavors is a fantastic way to relax and feel creative.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="yourName">Phoebe</h2>
        <img src={phoebePhoto} alt="Phoebe" />
        <ul>
          <li>
            <p className="about">
              I have a series of old-person hobbies, including gardening, crocheting and crosswords.
            </p>
          </li>
          <li>
            <p>
              They are all excellent, creative and meditative. Old people have it right.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
