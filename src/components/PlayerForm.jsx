import { useContext, useState } from "react";
import PlayerContext from "../context/PlayerContext";

export default function PlayerForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const { addPlayer } = useContext(PlayerContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newPlayer = {
      id: number,
      name,
      surname,
      number,
      position,
    };

    console.log(newPlayer);
    addPlayer(newPlayer);

    setName("");
    setSurname("");
    setNumber("");
    setPosition("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="number">Jersey number:</label>
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="position">Position:</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
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
