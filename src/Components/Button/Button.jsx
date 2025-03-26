import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "./../../context/LanguageContext"; // Asegúrate de la ruta correcta
import styles from "./Button.module.css";

export default function Button({ to }) {
  const navigate = useNavigate();
  const { langEng } = useContext(LanguageContext); // ⬅️ Obtiene el idioma del contexto
  let textButton = "";

  const handleNavigation = () => {
    if (to === "adopt") {
      navigate("/adopt");
    } else if (to === "adopt-form") {
      navigate("/adopt-form");
    } else {
      navigate("/");
    }
  };

  if (langEng) {
    textButton =
      to === "adopt" || to === "adopt-form" ? "Adopt me!" : "Back to home";
  } else {
    textButton =
      to === "adopt" || to === "adopt-form" ? "¡Adóptame!" : "Volver a inicio";
  }

  return (
    <button className={styles.Button} type="button" onClick={handleNavigation}>
      {textButton}
    </button>
  );
}

