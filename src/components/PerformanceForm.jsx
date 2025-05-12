import { useState, useContext } from "react";
import CoachContext from "../context/CoachContext";
import { validateNumber, validateSelectInput } from "./validation/Validation";
import styles from "../styles/PerformanceForm.module.scss";

export default function PerformanceForm() {
  const [player, setPlayer] = useState("");
  const [game, setGame] = useState("");
  const [points, setPoints] = useState("");
  const [rebounds, setRebounds] = useState("");
  const [assists, setAssists] = useState("");
  const [errors, setErorrs] = useState({
    playerError: "",
    gameError: "",
    pointsError: "",
    assistsError: "",
    reboundsError: "",
  });

  const { players, matches, addPerformance } = useContext(CoachContext);

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    const formErrors = {};

    const playerError = validateSelectInput(player, "Select player");
    if (playerError) {
      formErrors.playerError = playerError;
    }

    const gameError = validateSelectInput(game, "Select game");
    if (gameError) {
      formErrors.gameError = gameError;
    }

    const pointsError = validateNumber(points);
    if (pointsError) {
      formErrors.pointsError = pointsError;
    }

    const assistsError = validateNumber(assists);
    if (assistsError) {
      formErrors.assistsError = assistsError;
    }

    const reboundsError = validateNumber(rebounds);
    if (reboundsError) {
      formErrors.reboundsError = reboundsError;
    }

    setErorrs(formErrors);

    if (
      formErrors.playerError ||
      formErrors.gameError ||
      formErrors.pointsError ||
      formErrors.assistsError ||
      formErrors.reboundsError
    ) {
      return;
    }

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
    setErorrs("");
  }

  return players.length === 0 || matches.length === 0 ? (
    <div>
      <h2>You must add player and match first.</h2>
    </div>
  ) : (
    <div className={styles.performanceContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <select value={player} onChange={(e) => setPlayer(e.target.value)}>
            <option>Player:</option>
            {players.map((player) => {
              return (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              );
            })}
          </select>
          {errors.playerError && <p>{errors.playerError}</p>}
        </div>

        <div>
          <select value={game} onChange={(e) => setGame(e.target.value)}>
            <option>Game:</option>
            {matches.map((match) => {
              return (
                <option key={match.id} value={match.opponent}>
                  {match.opponent}
                </option>
              );
            })}
          </select>
          {errors.gameError && <p>{errors.gameError}</p>}
        </div>

        <div>
          <input
            type="number"
            name="points"
            placeholder="Points:"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
          {errors.pointsError && <p>{errors.pointsError}</p>}
        </div>

        <div>
          <input
            type="number"
            name="assists"
            placeholder="Assists:"
            value={assists}
            onChange={(e) => setAssists(e.target.value)}
          />
          {errors.assistsError && <p>{errors.assistsError}</p>}
        </div>

        <div>
          <input
            type="number"
            name="rebounds"
            placeholder="Rebounds:"
            value={rebounds}
            onChange={(e) => setRebounds(e.target.value)}
          />
          {errors.reboundsError && <p>{errors.reboundsError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
