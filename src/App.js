import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

import Header from "./components/Header";
import PlayerForm from "./components/PlayerForm";
import MatchForm from "./components/MatchForm";
import PerformanceForm from "./components/PerformanceForm";
import PerformanceTable from "./components/PerformanceTable";
import PlayerStats from "./components/PlayerStats";
import { CoachProvider } from "./context/CoachContext";

function App() {
  return (
    <Router>
      <div className="app">
        <CoachProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PlayerForm />} />
            <Route path="/add-match" element={<MatchForm />} />
            <Route path="/add-performance" element={<PerformanceForm />} />
            <Route path="/performances_table" element={<PerformanceTable />} />
            <Route path="/player_stats" element={<PlayerStats />} />
          </Routes>
        </CoachProvider>
      </div>
    </Router>
  );
}

export default App;
