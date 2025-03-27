import React, { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import style from "./CatCard.module.css";
import { FavoritesContext } from "../../pages/FavoritesContext";
import { ADD_FAVORITE } from "../../reducers/favoritesReducer";
import { LanguageContext } from "../../context/LanguageContext";

function CatCard({ cat, className }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true); // Nuevo estado
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext); // Accede a favoritesState

  const { langEng } = useContext(LanguageContext); // Accede al valor langEng desde el contexto
  const textButton = langEng
    ? expanded
      ? "See less"
      : "See more"
    : expanded
    ? "Ver menos"
    : "Ver más";

    function limitText(text, maxLength) {
      return text.substring(0, maxLength) + (text.length > maxLength ? "..." : "");
    }

  useEffect(() => {
    if (cat.breeds && cat.breeds.length > 0) {
      setBreedInfo(cat.breeds[0]);
    } else {
      setBreedInfo(null);
    }
    // Verifica si la card ya está en favoritos
    if (favoritesState.favorites.some((fav) => fav.id === cat.id)) {
      setShowButton(false); // Oculta el botón si ya está en favoritos
    }
  }, [cat.breeds, favoritesState.favorites, cat.id]); // Agrega dependencias

  // Alternar el estado de expandir/contraer la descripción
  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handleFavorite = () => {
    favoritesDispatch({ type: ADD_FAVORITE, payload: cat });
    setShowButton(false); // Oculta el botón inmediatamente
    setShowMessage(true); // Muestra el mensaje
    setTimeout(() => {
      setShowMessage(false); // Oculta el mensaje después de 3 segundos
    }, 3000);
  };

  return (
    <div className={style.catCard}>
      <img className={style.catImage} src={cat.url} alt="Gatito" />
      <div className={style.infoContainer}>
        {breedInfo ? (
          <div
            className={`${style.breedInfo} ${expanded ? style.expanded : ""}`}
          >
            <h3>{breedInfo.name}</h3>
            <p>
            {limitText(breedInfo.description, 100)}
            </p>
          </div>
        ) : (
          <div className={style.breedInfo}>
            <h3>{langEng ? "Unknown race" : "Raza desconocida"}</h3>
            <p className={style.texts}>
              {langEng
                ? "There is no breed information available for this kitten"
                : "No hay información de raza disponible para este gatito"}
            </p>
          </div>
        )}
      </div>
      <div className={style.controllerFavouriteButton}>
        {showButton && (
          <button className={style.favouriteButton} onClick={handleFavorite}>
            {langEng ? "Add to favorites" : "Añadir a favoritos"}
          </button>
        )}
      </div>
      {showMessage && (
        <p className={style.texts}>
          <strong>
            {langEng ? "Added to favorites" : "Añadido a favoritos"}
          </strong>
        </p>
      )}
      <div className={style.adopt}>
        <Button to="adopt-form" />
      </div>
    </div>
  );
}

export default CatCard;
