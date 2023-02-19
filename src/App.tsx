import "./App.css";
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://images-cdn.fantasyflightgames.com/ffg_content/eldritch-horror/p3/EH01-token-eldrich.png"
          className="App-logo"
          alt="logo"
        />
        <h1>Welcome to Tom's Eldritch Horror Tracker!</h1>
        <p>This will help Olivia a lot!</p>
        <Link to="/nameSelect" className="link">Ready?</Link>
      </header>
    </div>
  );
}

export default App;
