import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"> Gatitos Felices </Link>
      </div>
      <nav className={styles.nav}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark theme' : 'Light theme'}
        </button>
        <Link to="/" className={styles.navLink}>
          Inicio
        </Link>
        <Link to="/adopt" className={styles.navLink}>
          Adopta un Gatito
        </Link>
        <Link to="/favorites" className={styles.navLink}>
          Ir a Favoritos
        </Link>
      </nav>
    </header>
  );
}

export default Header;