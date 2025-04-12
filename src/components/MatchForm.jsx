import { useState, useContext } from "react";
import CoachContext from "../context/CoachContext";

export default function MatchForm() {
  const [opponent, setOpponent] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");

  const { addMatch } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newMatch = {
      id: Date.now(),
      opponent,
      date,
      result,
      score,
    };

    addMatch(newMatch);

    setOpponent("");
    setDate("");
    setResult("");
    setScore("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="opponent"
            placeholder="Opponent"
            value={opponent}
            onChange={(e) => setOpponent(e.target.value)}
          />
        </div>

        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <select value={result} onChange={(e) => setResult(e.target.value)}>
            <option>Result:</option>
            <option value="win">Win</option>
            <option value="lose">Lose</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            name="score"
            placeholder="Score:"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
