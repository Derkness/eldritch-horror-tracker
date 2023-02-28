import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GameHomePage, NameInputs, Tracker } from "./components";
import { CustomGameSetup } from "./components/CustomGameSetup";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PHASES } from "./utils/constants";
import { GameClassType } from "./utils/types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const GAME_CLASS: Record<string, GameClassType> = {
  ELDRITCH_HORROR: "eh",
  DEAD_OF_WINTER: "dow",
};
root.render(
  <>
    <a href="/">
      <img
        src="https://aux.iconspalace.com/uploads/board-games-icon-256.png"
        className="App-logo"
        style={{ height: "5vmin", position: "absolute" }}
        alt="logo"
      />
    </a>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="EldritchHorror">
            <Route index element={<GameHomePage iconLink="https://images-cdn.fantasyflightgames.com/ffg_content/eldritch-horror/p3/EH01-token-eldrich.png" gameClass={GAME_CLASS.ELDRITCH_HORROR} gameName="Eldritch Horror"/>} />
            <Route path="nameSelect" element={<NameInputs gameClass={GAME_CLASS.ELDRITCH_HORROR} gameName="Eldritch Horror" />} />
            <Route path="tracker/:names" element={<Tracker gameClass={GAME_CLASS.ELDRITCH_HORROR} phases={PHASES.ELDRITCH_HORROR}/>} />
          </Route>
          <Route path="DeadOfWinter">
            <Route index element={<GameHomePage iconLink="https://cdn-icons-png.flaticon.com/512/1183/1183790.png" gameClass={GAME_CLASS.DEAD_OF_WINTER} gameName="Dead Of Winter"/>} />
            <Route path="nameSelect" element={<NameInputs gameClass={GAME_CLASS.DEAD_OF_WINTER} gameName="Dead Of Winter" />} />
            <Route path="tracker/:names" element={<Tracker gameClass={GAME_CLASS.DEAD_OF_WINTER} phases={PHASES.DEAD_OF_WINTER}/>} />
          </Route>
          <Route path="Custom">
            <Route index element={<CustomGameSetup />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
