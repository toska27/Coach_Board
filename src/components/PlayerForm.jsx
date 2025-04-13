import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";
import {
  capitalizedValue,
  validateName,
  validateNumber,
  validateSelectInput,
} from "./validation/Validation";

export default function PlayerForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErorrs] = useState({
    nameError: "",
    numberError: "",
    positionError: "",
  });

  const { addPlayer } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    const capitalizedName = capitalizedValue(name);

    // Validation
    const formErrors = {};

    const nameError = validateName(capitalizedName, "Name");
    if (nameError) {
      formErrors.nameError = nameError;
    }

    const numberError = validateNumber(number);
    if (numberError) {
      formErrors.numberError = numberError;
    }

    const positionError = validateSelectInput(
      position,
      "Select a player position"
    );
    if (positionError) {
      formErrors.positionError = positionError;
    }

    setErorrs(formErrors);

    if (
      formErrors.nameError ||
      formErrors.numberError ||
      formErrors.positionError
    ) {
      return;
    }

    const newPlayer = {
      id: Date.now(),
      name: capitalizedName,
      number,
      position,
    };

    addPlayer(newPlayer);

    setName("");
    setNumber("");
    setPosition("");
    setErorrs({});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="player"
            placeholder="Name:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.nameError && <p>{errors.nameError}</p>}
        </div>

        <div>
          <input
            type="number"
            name="number"
            placeholder="Jersey number:"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.numberError && <p>{errors.numberError}</p>}
        </div>

        <div>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option>Select position:</option>
            <option value="pg">PG</option>
            <option value="sg">SG</option>
            <option value="sf">SF</option>
            <option value="pf">PF</option>
            <option value="c">C</option>
          </select>
          {errors.positionError && <p>{errors.positionError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
