import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ to, langEng }) {
  const navigate = useNavigate();
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
      to === "adopt" || to === "adopt-form" ? "Adoptame!" : "Volver a inicio";
  }

  return (
    <>
      <button
        className={styles.Button}
        type="button"
        onClick={handleNavigation}
      >
        {textButton}
      </button>
    </>
  );
}
