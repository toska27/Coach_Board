import { useState, useContext } from "react";
import CoachContext from "../context/CoachContext";

export default function PerformanceForm() {
  const [player, setPlayer] = useState("");
  const [game, setGame] = useState("");
  const [points, setPoints] = useState("");
  const [rebounds, setRebounds] = useState("");
  const [assists, setAssists] = useState("");

  const { players, matches, addPerformance } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newPerfomance = {
      id: Date.now(),
      player,
      game,
      points,
      rebounds,
      assists,
    };

    addPerformance(newPerfomance);

    setPlayer("");
    setGame("");
    setPoints("");
    setRebounds("");
    setAssists("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select value={player} onChange={(e) => handleSubmit(e.target.value)}>
            <option>Player:</option>
            {players.map((player) => {
              return (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <select value={game} onChange={(e) => handleSubmit(e.target.value)}>
            <option>Game:</option>
            {matches.map((match) => {
              return (
                <option key={match.id} value={match.opponent}>
                  {match.opponent}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <input
            type="number"
            name="points"
            placeholder="Points:"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            name="rebounds"
            placeholder="Rebounds:"
            value={rebounds}
            onChange={(e) => setRebounds(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            name="assists"
            placeholder="Assists:"
            value={assists}
            onChange={(e) => setAssists(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
