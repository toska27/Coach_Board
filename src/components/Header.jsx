import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <h2>🏀 CoachBoard</h2>
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>
      <nav>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
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
