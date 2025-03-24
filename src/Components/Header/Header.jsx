import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext); // Accede a toggleTheme
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">😺 Gatitos Felices 🐾</Link>
      </div>
      <nav className={styles.nav}>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark theme" : " Light theme"}</button>
        <Link to="/" className={styles.navLink}>Inicio</Link>
        <Link to="/adopt" className={styles.navLink}>Adopta un Gatito</Link>
       
      </nav>
    </header>
  );
}

export default Header;