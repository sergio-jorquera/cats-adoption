import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from './../../context/ThemeContext';
import { LanguageContext } from './../../context/LanguageContext'; // Importar el contexto del idioma
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Accede a toggleTheme
  const { langEng, toggleLanguage  } = useContext(LanguageContext); // Accede a langEng y setLangEng
  
  

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">😺 Gatitos Felices 🐾</Link>
      </div>
      <nav className={styles.nav}>
        {/* Botón para cambiar tema */}
        <button className={styles.buttonHeader} onClick={toggleTheme}>
          {theme === 'light' ? 'Dark theme' : 'Light theme'}
        </button>
        
        {/* Botón para cambiar idioma */}
        <button className={styles.buttonHeader}  onClick={toggleLanguage}>
          {langEng ? 'Español' : 'English'} {/* El texto cambia según el idioma actual */}
        </button>

        <Link to="/" className={styles.navLink}>Inicio</Link>
        <Link to="/adopt" className={styles.navLink}>Adopta un Gatito</Link>
      </nav>
    </header>
  );
}

export default Header;
