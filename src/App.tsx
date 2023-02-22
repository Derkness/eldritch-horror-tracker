import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://aux.iconspalace.com/uploads/board-games-icon-256.png"
          className="App-logo"
          alt="logo"
        />
        <h1>Welcome to Tom's Board Game Turn Tracker!</h1>
        <p>What game are we playing?</p>
        <Link to="/EldritchHorror" className="link eh">Eldritch Horror</Link>
        <Link to="/DeadOfWinter" className="link dow">Dead Of Winter</Link>
      </header>
    </div>
  );
}

export default App;
