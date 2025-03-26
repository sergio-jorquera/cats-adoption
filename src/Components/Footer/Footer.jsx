import React from 'react';
import styles from './Footer.module.css';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

function Footer() {

 const { langEng,} = useContext(LanguageContext);
 const footerTextOne = langEng ? "Project carried out by:" : "Proyecto realizado por:";
 const footerTextTwo = langEng ? "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. All rights reserved." : "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. Todos los derechos reservados. &copy; 2025";

  return (
    <footer className={styles.footer}>
      <ul>
      <li>{footerTextOne}</li>
      <li>{footerTextTwo}</li>
      </ul>
    </footer>
  );
}

export default Footer;