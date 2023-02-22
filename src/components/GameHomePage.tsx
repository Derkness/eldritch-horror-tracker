import clsx from "clsx";
import { Link } from "react-router-dom";
import "../index.css";
import { GameClassType, GameName } from "../utils/types";

interface GameHomePageProps {
  iconLink: string
  gameClass: GameClassType
  gameName: GameName
}

export function GameHomePage({ iconLink, gameClass, gameName }: GameHomePageProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={iconLink}
          className="App-logo"
          alt="logo"
        />
        <p>
          Welcome to {gameName}! This tracker will help you keep track of your game as you go!
        </p>
        <Link to={`/${gameName.replaceAll(" ","")}/nameSelect`} className={clsx("link", gameClass)}>
          Get going!
        </Link>
      </header>
    </div>
  );
}

// BASICALLY:
// Keep the routes where they are, nested in index
// Remove this 'router' and instead just have it be a home page with links
// No need
