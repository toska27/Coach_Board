import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2>🏀 CoachBoard</h2>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Add Player</Link>
          </li>
          <li>
            <Link to="/add-match">Add Match</Link>
          </li>
          <li>
            <Link to="/add-performance">Add Performance</Link>
          </li>
          <li>
            <Link to="/performances_table">Performances Table</Link>
          </li>
          <li>
            <Link to="/player_stats">Player Stats</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
