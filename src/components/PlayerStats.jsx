import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";

export default function PlayerStats() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const { players, performances } = useContext(CoachContext);

  const filteredPlayer = players.filter(
    (player) => player.name === selectedPlayer
  );
  const filteredPerformances = performances.filter(
    (perfomance) => perfomance.player === selectedPlayer
  );

  return (
    <div>
      <select
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        <option>Select player</option>
        {players.map((player) => {
          return (
            <option id={player.id} value={player.name}>
              {player.name}
            </option>
          );
        })}
      </select>

      {filteredPlayer.length > 0 && (
        <>
          <h2>Name: {filteredPlayer[0].name}</h2>
          <h4>Number: {filteredPlayer[0].number}</h4>
          <h4>Position: {filteredPlayer[0].position}</h4>
          <h3>Player Stats</h3>
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
              </tr>
            </thead>
            <tbody>
              {filteredPerformances.map((perf, i) => (
                <tr key={i}>
                  <td>{perf.game}</td>
                  <td>{perf.points}</td>
                  <td>{perf.assists}</td>
                  <td>{perf.rebounds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
