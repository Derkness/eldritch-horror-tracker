import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { GameClassType, Phase } from "../utils/types";

interface TrackerProps {
  gameClass: GameClassType;
  phases: Phase[];
}

export function Tracker({ gameClass, phases }: TrackerProps) {
  const { names } = useParams();
  const [nameList, setNameList] = useState(names?.split(","));
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentPhaseId, setCurrentPhaseId] = useState(0);
  const [playerNameTurn, setPlayerNameTurn] = useState("");
  const [iconLink, setIconLink] = useState(
    getCurrentPhase().icon
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

  const shiftFirstPlayer = useCallback(() => {
    const newPlayerList = nameList!.slice(1);
    newPlayerList.push(nameList![0]);
    setNameList(newPlayerList)
  }, [nameList])

  const updatePhase = useCallback(() => {
    const newPhaseId = currentPhaseId+1;
    if (newPhaseId == phases.length) {
      setCurrentPhaseId(0);
      shiftFirstPlayer();
    } else {
      setCurrentPhaseId(newPhaseId);
    }
  }, [currentPhaseId, shiftFirstPlayer])

  useEffect(() => {
    setIconLink(getCurrentPhase().icon)
  }, [currentPhaseId])

  function getCurrentPhase() {
    return phases[currentPhaseId];
  }

  const nextMove = useCallback(() => {
    if (currentTurn === nameList!.length - 1 || !getCurrentPhase().all) {
      setCurrentTurn(0);
      updatePhase();
    } else {
      setCurrentTurn(currentTurn + 1);
    }
  }, [currentPhaseId, currentTurn, nameList, updatePhase])

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
  }, [currentTurn, currentPhaseId, handleKeyDown]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          {getCurrentPhase().name} Phase&nbsp;&nbsp;
          {iconLink && <img src={iconLink} className={clsx("small-logo", gameClass)} alt="logo" />}
        </h1>
        {getCurrentPhase().all && (
          <p style={{ marginTop: "-1em" }}>{playerNameTurn}</p>
        )}
        <button type="button" className={gameClass} onClick={nextMove}>
          Next Move
        </button>
      </header>
    </div>
  );
}
