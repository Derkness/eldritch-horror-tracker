import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export function Tracker() {
  const { names } = useParams();
  const [nameList, setNameList] = useState(names?.split(","));
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentPhase, setCurrentPhase] = useState("Action");
  const [playerNameTurn, setPlayerNameTurn] = useState("");
  const [iconLink, setIconLink] = useState(
    "https://health-infobase.canada.ca/img/workout.png"
  );

  useEffect(() => {
    let currentPlayerName: string = nameList![currentTurn];
    if (currentPlayerName[currentPlayerName.length - 1] === "s") {
      currentPlayerName = currentPlayerName.concat("' ");
    } else {
      currentPlayerName = currentPlayerName.concat("'s ");
    }
    currentPlayerName = currentPlayerName.concat("Turn");
    setPlayerNameTurn(currentPlayerName);
  }, [currentTurn, nameList]);

  useEffect(() => {
    switch (currentPhase) {
      case "Action":
        setIconLink("https://health-infobase.canada.ca/img/workout.png");
        break;
      case "Encounter":
        setIconLink(
          "https://icones.pro/wp-content/uploads/2021/05/symbole-d-avertissement-rose.png"
        );
        break;
      case "Mythos":
        setIconLink(
          "https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-rose.png"
        );
        break;
    }
  }, [currentPhase]);

  const shiftFirstPlayer = useCallback(() => {
    const newPlayerList = nameList!.slice(1);
    newPlayerList.push(nameList![0]);
    setNameList(newPlayerList)
  }, [nameList])

  const updatePhase = useCallback(() => {
    switch (currentPhase) {
      case "Action":
        setCurrentPhase("Encounter");
        break;
      case "Encounter":
        setCurrentPhase("Mythos");
        break;
      default:
        setCurrentPhase("Action");
        shiftFirstPlayer()
        break;
    }
  }, [currentPhase, shiftFirstPlayer])

  const nextMove = useCallback(() => {
    if (currentTurn === nameList!.length - 1 || currentPhase === "Mythos") {
      setCurrentTurn(0);
      updatePhase();
    } else {
      setCurrentTurn(currentTurn + 1);
    }
  }, [currentPhase, currentTurn, nameList, updatePhase])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextMove();
    }
  }, [nextMove]);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentTurn, currentPhase, handleKeyDown]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          {currentPhase} Phase&nbsp;&nbsp;
          <img src={iconLink} className="small-logo" alt="logo" />
        </h1>
        {currentPhase !== "Mythos" && (
          <p style={{ marginTop: "-1em" }}>{playerNameTurn}</p>
        )}
        <button type="button" onClick={nextMove}>
          Next Move
        </button>
      </header>
    </div>
  );
}
