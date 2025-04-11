import { createContext, useState } from "react";

const CoachContext = createContext();

export const CoachProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [performances, setPerformances] = useState([]);

  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const addMatch = (newMatch) => {
    setMatches((prevMatches) => [...prevMatches, newMatch]);
  };

  const addPerformance = (newPerformance) => {
    setPerformances((prevPerformances) => [
      ...prevPerformances,
      newPerformance,
    ]);
  };

  return (
    <CoachContext.Provider
      value={{
        players,
        matches,
        performances,
        addPlayer,
        addMatch,
        addPerformance,
      }}
    >
      {children}
    </CoachContext.Provider>
  );
};

export default CoachContext;
