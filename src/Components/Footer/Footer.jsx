import React from 'react';
import styles from './Footer.module.css';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

function Footer() {

 const { langEng} = useContext(LanguageContext);
 const footerTextOne = langEng ? "Project carried out by:" : "Proyecto realizado por:";
 const footerTextTwo = langEng ? "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. All rights reserved." : "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. Todos los derechos reservados.";

  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
      <li className={styles.listSty}>{footerTextOne}</li>
      <li className={styles.listSty}>{footerTextTwo}</li>
      </ul>
    </footer>
  );
}

export default Footer;