import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NameInputs } from "./components/NameInputs";
import { Tracker } from "./components/Tracker";
import { Link } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <a href="/">
      <img
        src="https://images-cdn.fantasyflightgames.com/ffg_content/eldritch-horror/p3/EH01-token-eldrich.png"
        className="App-logo"
        style={{ height: "5vmin", position: "absolute" }}
        alt="logo"
      />
    </a>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="nameSelect" element={<NameInputs />} />
          <Route path="tracker/:names" element={<Tracker />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
