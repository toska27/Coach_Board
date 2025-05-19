import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";
import styles from "../styles/PerformanceTable.module.scss";

export default function PerfomanceTable() {
  const [selectedMatch, setSelectedMatch] = useState("");
  const { matches, performances } = useContext(CoachContext);

  const navigate = useNavigate();

  const filteredPerformances = performances.filter(
    (performance) => performance.game === selectedMatch
  );
  const filteredMatches = matches.filter(
    (match) => match.opponent === selectedMatch
  );

  return matches.length === 0 ? (
    <div>
      <h2 className={styles.info}>
        You must{" "}
        <p className={styles.pointer} onClick={() => navigate("/add-match")}>
          add match
        </p>{" "}
        first.
      </h2>
    </div>
  ) : (
    <div className="containerTable">
      <select
        value={selectedMatch}
        onChange={(e) => setSelectedMatch(e.target.value)}
        className={styles.selectMatch}
      >
        <option value="">-- Choose a match --</option>
        {matches.map((match) => {
          return (
            <option key={match.id} value={match.opponent}>
              {match.opponent}
            </option>
          );
        })}
      </select>

      {selectedMatch === "" ? null : filteredPerformances.length === 0 ? (
        <div>
          <h2 className="tableInfo">Date: {filteredMatches[0].date}</h2>
          <h2 className="tableInfo">
            Result: {filteredMatches[0].score} - {filteredMatches[0].result}
          </h2>
          <h3 className="tableInfo">
            <p
              className={styles.pointer}
              onClick={() => navigate("/add-performance")}
            >
              Add performance
            </p>{" "}
            for this match.
          </h3>
        </div>
      ) : (
        <div>
          <h2 className="tableInfo">Date: {filteredMatches[0].date}</h2>
          <h2 className="tableInfo">
            Result: {filteredMatches[0].score} - {filteredMatches[0].result}
          </h2>
          <h3 className={styles.perfTable}>Performances:</h3>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
              </tr>
            </thead>
            <tbody>
              {filteredPerformances.map((perf, i) => (
                <tr key={i}>
                  <td>{perf.player}</td>
                  <td>{perf.points}</td>
                  <td>{perf.assists}</td>
                  <td>{perf.rebounds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
