import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './Header.module.css';
import { ThemeContext } from './../../context/ThemeContext';
import { LanguageContext } from './../../context/LanguageContext';


function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { langEng, toggleLanguage } = useContext(LanguageContext);
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  
  const textHeader = langEng ? "Happy Kittens" : "Gatitos Felices";
  const textAdopt = langEng ? "Adopt a Kitten" : "Adopta un gatito";
  const textStart = langEng ? "Start" : "Inicio";
  const textAlt = langEng ? "Adopt a Kitten logo" : "Logo de Adopta un gatito";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src='../../../images/logo.webp' alt={textAlt} className={styles.imgLogo}/> 
          {textHeader} 🐾
        </Link>
      </div>

      <nav className={styles.nav}>
        {/* Dropdown con opciones */}
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle tag="button" className={styles.buttonHeader} caret>
             {langEng ? "Settings" : "Configuración"}
          </DropdownToggle>
          <DropdownMenu className={styles.dropDownMenu}>
            <DropdownItem className={styles.down} onClick={toggleTheme}>
              {langEng 
                ? (theme === 'light' ? 'Dark theme' : 'Light theme') 
                : (theme === 'light' ? 'Tema oscuro' : 'Tema claro')}
            </DropdownItem>
            <DropdownItem  className={styles.down} onClick={toggleLanguage}>
              {langEng ? 'Español' : 'English'}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link to="/" className={styles.navLink}>{textStart}</Link>
        <Link to="/adopt" className={styles.navLink}>{textAdopt}</Link>
      </nav>
    </header>
  );
}

export default Header;

