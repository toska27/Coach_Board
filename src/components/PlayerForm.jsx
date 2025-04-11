import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";

export default function PlayerForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const { addPlayer } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newPlayer = {
      id: Date.now(),
      name,
      number,
      position,
    };

    addPlayer(newPlayer);

    setName("");
    setNumber("");
    setPosition("");
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
        </div>

        <div>
          <input
            type="number"
            name="number"
            placeholder="Jersey number:"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
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
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
