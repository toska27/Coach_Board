import { createContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
