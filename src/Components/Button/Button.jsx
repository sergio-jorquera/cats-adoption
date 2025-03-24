import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ to }) {
  const navigate = useNavigate();
  let textButton = "";

  const handleNavigation = () => {
    if (to === "adopt") {
      navigate('/adopt');
    } else {
      navigate('/');
    }
  };

  textButton = to === "adopt" ? "¡Adoptame!" : "Volver a Inicio";

  return (
    <button className={styles.Button} type="button" onClick={handleNavigation}>{textButton}</button>
  );
};