import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";

export default function PlayerForm() {
  const [nameValue, setNameValue] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErorrs] = useState({
    nameError: "",
    numberError: "",
    positionError: "",
  });

  const { addPlayer } = useContext(CoachContext);

  let name = nameValue.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1);

  function validation() {
    let formErrors = {};

    // Name Validation
    if (name === "") {
      formErrors.nameError = "Name is required";
    } else if (name.length < 2) {
      formErrors.nameError = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z]+$/.test(name)) {
      formErrors.nameError = "Name can only contain letters.";
    }

    // Number validation
    if (number < 0 || number > 99 || number === "") {
      formErrors.numberError = "You must enter number beetwen 0 and 99";
    }

    // Position validation
    if (position === "Select position:" || position === "") {
      formErrors.positionError = "Select poistion of player.";
    }

    setErorrs(formErrors);
    return Object.keys(formErrors).length === 0; // valid if no errors
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validation();
    if (!isValid) {
      return;
    }

    const newPlayer = {
      id: Date.now(),
      name,
      number,
      position,
    };

    addPlayer(newPlayer);

    console.log(newPlayer);

    setNameValue("");
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
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
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
