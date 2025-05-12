import { useState, useContext } from "react";
import CoachContext from "../context/CoachContext";
import {
  validateName,
  validateScore,
  validateSelectInput,
  capitalizedValue,
} from "./validation/Validation";
import styles from "../styles/MatchForm.module.scss";

export default function MatchForm() {
  const [opponent, setOpponent] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");
  const [errors, setErorrs] = useState({
    opponentError: "",
    dateError: "",
    resultError: "",
    scoreError: "",
  });

  const { addMatch } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    const capitalizedOpponet = capitalizedValue(opponent);
    const trimmedScore = score.trim();

    // Validation
    const formErrors = {};

    const opponentError = validateName(capitalizedOpponet, "Name of opponent");
    if (opponentError) {
      formErrors.opponentError = opponentError;
    }

    if (!date) {
      formErrors.dateError = "Date is required.";
    }

    const resultError = validateSelectInput(result, "Select result");
    if (resultError) {
      formErrors.resultError = resultError;
    }

    const scoreError = validateScore(trimmedScore);
    if (scoreError) {
      formErrors.scoreError = scoreError;
    }

    setErorrs(formErrors);

    if (
      formErrors.opponentError ||
      formErrors.dateError ||
      formErrors.resultError ||
      formErrors.scoreError
    ) {
      return;
    }

    const newMatch = {
      id: Date.now(),
      opponent: capitalizedOpponet,
      date,
      result,
      score: trimmedScore,
    };

    addMatch(newMatch);

    setOpponent("");
    setDate("");
    setResult("");
    setScore("");
    setErorrs("");
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="opponent"
            placeholder="Opponent"
            value={opponent}
            onChange={(e) => setOpponent(e.target.value)}
          />
          {errors.opponentError && <p>{errors.opponentError}</p>}
        </div>

        <div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.dateError && <p>{errors.dateError}</p>}
        </div>

        <div>
          <select value={result} onChange={(e) => setResult(e.target.value)}>
            <option>Result:</option>
            <option value="win">Win</option>
            <option value="lose">Lose</option>
          </select>
          {errors.resultError && <p>{errors.resultError}</p>}
        </div>

        <div>
          <input
            type="text"
            name="score"
            placeholder="Score:"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          {errors.scoreError && <p>{errors.scoreError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
