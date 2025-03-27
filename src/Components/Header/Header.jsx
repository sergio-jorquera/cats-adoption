import React, { useContext }, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from './../../context/ThemeContext';
import { LanguageContext } from './../../context/LanguageContext'; // Importar el contexto del idioma


function Header() {
  
  const { theme, toggleTheme } = useContext(ThemeContext); // Accede a toggleTheme
  const { langEng, toggleLanguage  } = useContext(LanguageContext); // Accede a langEng y setLangEng
  
  const textHeader= langEng ? "Happy kittens" : "Gatitos felices";
  const textAdopt =langEng ? "Adopt a Kitten" : "Adopta un gatito";
  const textStart =langEng ? "Start" : "Inicio";
  const textAlt = langEng ? "Adopt a Kitten logo" : "Logo de Adopta un gatito";
  
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"><img src='../../../images/logo.webp' alt={textAlt} className={styles.imgLogo}/> {textHeader} 🐾</Link>
      </div>
      <nav className={styles.nav}>
        {/* Botón para cambiar tema */} 
        <button className={styles.buttonHeader} onClick={toggleTheme}>
          {langEng 
            ? (theme === 'light' ? 'Dark theme' : 'Light theme') 
            : (theme === 'light' ? 'Tema oscuro' : 'Tema claro')}
          </button>
        
        {/* Botón para cambiar idioma */}
        <button className={styles.buttonHeader}  onClick={toggleLanguage}>
          {langEng ? 'Español' : 'English'} {/* El texto cambia según el idioma actual */}
        </button>

        <Link to="/" className={styles.navLink}>{textStart}</Link>
        <Link to="/adopt" className={styles.navLink}>{textAdopt}</Link>
      </nav>
    </header>
  );
}

export default Header;
