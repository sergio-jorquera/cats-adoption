import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { translateHeader, translateTheme } from "../../translates/translates";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { langEng, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const text = translateHeader(langEng);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <img
            src="/images/logo.webp"
            alt={text.textAlt}
            className={styles.imgLogo}
          />
          {text.name} 🐾
        </Link>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`${styles.navMenu} ${menuOpen ? styles.navOpen : ""} ${theme === "dark" ? styles.dark : ""}`}>
        <Link to="/" className={styles.navItem} onClick={closeMenu}>
          {text.element1}
        </Link>
        <Link to="/adopt" className={styles.navItem} onClick={closeMenu}>
          {text.element2}
        </Link>
        <Link to="/favorites" className={styles.navItem} onClick={closeMenu}>
          {text.element3}
        </Link>
        <button
          className={styles.navItem}
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
        >
          {translateTheme(langEng, theme)}
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
        >
          {text.lang}
        </button>
      </nav>
    </header>
  );
}

export default Header;