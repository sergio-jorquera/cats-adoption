import React, { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import style from "./CatCard.module.css";
import { FavoritesContext } from "../../pages/FavoritesContext";
import { ADD_FAVORITE } from "../../reducers/favoritesReducer";
import { LanguageContext } from "../../context/LanguageContext";

function CatCard({ cat }) {
  // Estado para la información de la raza del gato
  const [breedInfo, setBreedInfo] = useState(null);
  const [expanded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true); // Nuevo estado
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext); // Accede a favoritesState

  const { langEng } =  useContext(LanguageContext); // Accede al valor langEng desde el contexto
 

  
    function limitText(text, maxLength) {
          return text.substring(0, maxLength) + (text.length > maxLength ? "..." : "");
        }
  
  useEffect(() => {
    // Verifica si el gato tiene información de raza
    if (cat.breeds && cat.breeds.length > 0) {
      setBreedInfo(cat.breeds[0]);
    } else {
      setBreedInfo(null);
    }
    // Verifica si la card ya está en favoritos y oculta el botón si es así
    if (favoritesState.favorites.some((fav) => fav.id === cat.id)) {
      setShowButton(false);
    }
  }, [cat.breeds, favoritesState.favorites, cat.id]);

  
  

  // Función para añadir la card a favoritos
  const handleFavorite = () => {
    // Dispara la acción para añadir a favoritos
    favoritesDispatch({ type: ADD_FAVORITE, payload: cat });
    // Oculta el botón inmediatamente
    setShowButton(false);
    // Muestra el mensaje "Añadido a Favoritos"
    setShowMessage(true);
    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    
   <div className={style.catCard}>
      <img className={style.catImage} src={cat.url} alt="Gatito" />
      <div className={style.infoContainer}>
        {breedInfo ? (
          <div className={`${style.breedInfo} ${expanded ? style.expanded : ""}`}>
            <h3 className={style.titleCats}>{breedInfo.name}</h3>
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
        <Button className={style.buttonAP} to="adopt-form" />
      </div>
    </div>
   
  );
}

export default CatCard;
