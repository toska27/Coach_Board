import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";

export default function PlayerStats() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const { players, performances } = useContext(CoachContext);

  const navigate = useNavigate();

  const filteredPlayer = players.filter(
    (player) => player.name === selectedPlayer
  );
  const filteredPerformances = performances.filter(
    (perfomance) => perfomance.player === selectedPlayer
  );

  return players.length === 0 ? (
    <div>
      <h2>
        You must{" "}
        <p
          style={{
            display: "inline",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/add-player")}
        >
          add player
        </p>{" "}
        first.
      </h2>
    </div>
  ) : (
    <div>
      <h2>Select Player</h2>
      <select
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        <option>-- Select player --</option>
        {players.map((player) => {
          return (
            <option key={player.id} value={player.name}>
              {player.name}
            </option>
          );
        })}
      </select>

      {selectedPlayer === "" || filteredPlayer.length === 0 ? null : (
        <div>
          <h2>Name: {filteredPlayer[0].name}</h2>
          <h4>Number: {filteredPlayer[0].number}</h4>
          <h4>Position: {filteredPlayer[0].position}</h4>
          {filteredPerformances.length === 0 ? (
            <div>
              <h3>
                <p
                  style={{
                    display: "inline",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate("/add-performance")}
                >
                  Add performance
                </p>{" "}
                for this player.
              </h3>
            </div>
          ) : (
            <>
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
              </table>{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
}
