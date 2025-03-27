import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { langEng, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
 

  const textHeader = langEng ? "Happy Kittens" : "Gatitos Felices";
  const textAlt = langEng ? "Adopt a Kitten logo" : "Logo de Adopta un gatito";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <img
            src="/images/logo.webp"
            alt={textAlt}
            className={styles.imgLogo}
          />
          {textHeader} 🐾
        </Link>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.navOpen : ""} ${theme === "dark" ? styles.dark : ""}`}>
        <Link to="/" className={styles.navItem} onClick={closeMenu}>
          {langEng ? "Start" : "Inicio"}
        </Link>
        <Link to="/adopt" className={styles.navItem} onClick={closeMenu}>
          {langEng ? "Adopt a Kitten" : "Adopta un gatito"}
        </Link>
        <Link to="/favorites" className={styles.navItem} onClick={closeMenu}>
          {langEng ? "Favorites" : "Favoritos"}
        </Link>
        <button
          className={styles.navItem}
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
        >
          {langEng
            ? theme === "light"
              ? "Dark theme"
              : "Light theme"
            : theme === "light"
            ? "Tema oscuro"
            : "Tema claro"}
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
        >
          {langEng ? "Español" : "English"}
        </button>
      </nav>
    </header>
  );
}

export default Header;