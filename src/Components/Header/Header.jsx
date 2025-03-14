import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">😺 Gatitos Felices 🐾</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Inicio</Link>
        <Link to="/adopt" className={styles.navLink}>Adopta un Gatito</Link>
      </nav>
    </header>
  );
}

export default Header;