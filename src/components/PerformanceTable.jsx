import { useContext, useState } from "react";
import CoachContext from "../context/CoachContext";

export default function PerfomanceTable() {
  const { matches, performances } = useContext(CoachContext);
  const [selectedMatch, setSelectedMatch] = useState("");

  const filteredPerformances = performances.filter(
    (performance) => performance.game === selectedMatch
  );
  const filteredMatches = matches.filter(
    (match) => match.opponent === selectedMatch
  );

  console.log(filteredMatches);

  return (
    <div>
      <h2>Select Match</h2>
      <select
        value={selectedMatch}
        onChange={(e) => setSelectedMatch(e.target.value)}
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

      {filteredPerformances.length > 0 && (
        <>
          <h2>Date: {filteredMatches[0].date}</h2>
          <h2>
            Result: {filteredMatches[0].score} - {filteredMatches[0].result}
          </h2>
          <h3>Performances</h3>
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
        </>
      )}
    </div>
  );
}
