import { useState } from "react";
import "../index.css";
import { Phase } from "../utils/types";

interface CustomGameSetupProps {}

const newPhase = {
  name: "",
  icon: "",
  all: true,
};

export function CustomGameSetup({}: CustomGameSetupProps) {
  const [phases, setPhases] = useState<Phase[]>([newPhase]);

  function checkIfAddPhase(index: number, newPhases: Phase[]) {
    if (phases.filter((phase) => phase.name==="").length === 0) {
      newPhases.push(newPhase);
    }
    setPhases(newPhases);
  }

  function updatePhaseName(index: number, content: string) {
    const newPhases = Array.from(phases);
    newPhases[index].name = content;
    checkIfAddPhase(index, newPhases);
  }
  function updatePhaseIcon(index: number, content: string) {
    const newPhases = phases;
    newPhases[index].icon = content;
    checkIfAddPhase(index, newPhases);
  }
  function updatePhaseAll(index: number, content: boolean) {
    const newPhases = phases;
    newPhases[index].all = content;
    checkIfAddPhase(index, newPhases);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing a game we don't have? Create your own here!</h1>
        <p>
          If you find it too limiting, let us know why and we'll make this more
          general!
        </p>
        <p style={{ display: "flex" }}>
          Does the first player move around the room? <input type="checkbox" />
        </p>
        <table>
          <tbody>
            {phases.map((phase, index) => (
              <tr key={phase.name}>
                <td>
                  <input
                    placeholder="Phase name"
                    onChange={(event) =>
                      updatePhaseName(index, event.currentTarget.value)
                    }
                  />
                </td>
                <td>
                  <input
                    placeholder="Icon Link"
                    onChange={(event) =>
                      updatePhaseIcon(index, event.currentTarget.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={phase.all}
                    onChange={(event) =>
                      updatePhaseAll(index, event.currentTarget.checked)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
