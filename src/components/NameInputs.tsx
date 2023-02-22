import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { GameClassType, GameName } from "../utils/types";

interface FormInput {
  value: string;
}

interface NameInputsProps {
  gameClass: GameClassType;
  gameName: GameName;
}

export function NameInputs({ gameClass, gameName }: NameInputsProps) {
  const [inputs, setInputs] = useState<FormInput[]>([{ value: "" }]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = { value: event.target.value };
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
        event.preventDefault();
        handleAddInput();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Who is going to be playing today?</h1>
        <form>
          {inputs.map((inputValue, index) => (
            <div key={index}>
              <input
                type="text"
                className={gameClass}
                value={inputValue.value}
                onChange={(event) => handleInputChange(index, event)}
                autoFocus={index === inputs.length - 1}
                onKeyDown={handleKeyPress}
              />
            </div>
          ))}
          <button type="button" className={gameClass} onClick={handleAddInput}>
            More
          </button>
          <br />
          <Link
            to={`/${gameName.replaceAll(" ","")}/tracker/${inputs
              .filter((a) => a.value != "")
              .map((a) => a.value)}`}
            className={clsx("link", gameClass)}
          >
            Play Time?
          </Link>
        </form>
      </header>
    </div>
  );
}
