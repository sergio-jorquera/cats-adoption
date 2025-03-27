import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ to, className, children }) {
  const navigate = useNavigate();
  const { langEng } = useContext(LanguageContext); // ⬅️ Obtiene el idioma del contexto

  const handleNavigation = () => {
    const routes = {
      adopt: "/adopt",
      "adopt-form": "/adopt-form",
      home: "/",
    };
    navigate(routes[to] || "/");
  };

  // Definir el texto según el idioma
  const textButton = langEng
    ? to === "adopt" || to === "adopt-form"
      ? "Adopt me!"
      : "Back to home"
    : to === "adopt" || to === "adopt-form"
    ? "¡Adóptame!"
    : "Volver a inicio";

  return (
    <button
      className={`${styles.Button} ${className}`}
      type="button"
      onClick={handleNavigation}
    >
      {children || textButton}
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
