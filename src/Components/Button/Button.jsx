import React from 'react';
import styles from './Button.module.css'; // Importa los estilos modulares


function Button({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;