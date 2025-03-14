import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Proyecto realizado por: Sergio Jorquera, Saturnino Méndez y Rubén Ortega. Todos los derechos reservados. &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;