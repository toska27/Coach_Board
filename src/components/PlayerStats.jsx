import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";
import styles from "../styles/PlayerStats.module.scss";

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
      <h2 className={styles.info}>
        You must{" "}
        <p className={styles.pointer} onClick={() => navigate("/")}>
          add player
        </p>{" "}
        first.
      </h2>
    </div>
  ) : (
    <div className="containerTable">
      <select
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
        className={styles.selectPlayer}
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
          <h2 className="tableInfo">Name: {filteredPlayer[0].name}</h2>
          <h2 className="tableInfo">Number: {filteredPlayer[0].number}</h2>
          <h2 className="tableInfo">Position: {filteredPlayer[0].position}</h2>
          {filteredPerformances.length === 0 ? (
            <div>
              <h3 className="tableInfo">
                <p
                  className={styles.pointer}
                  onClick={() => navigate("/add-performance")}
                >
                  Add performance
                </p>{" "}
                for this player.
              </h3>
            </div>
          ) : (
            <>
              <h3>Player Stats:</h3>
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
