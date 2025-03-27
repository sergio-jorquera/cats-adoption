import React, { useState, useContext, useEffect } from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';
import { FavoritesContext } from '../../pages/FavoritesContext';
import { ADD_FAVORITE } from '../../reducers/favoritesReducer';
import { LanguageContext } from '../../context/LanguageContext';

function CatCard({ cat }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true); // Nuevo estado
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext); // Accede a favoritesState

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

  const toggleExpand = () => {
    setExpanded(!expanded);
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
          <div className={`${style.breedInfo} ${expanded ? style.expanded : ''}`}>
            <h3>{breedInfo.name}</h3>
            <p>
              {expanded
                ? breedInfo.description
                : `${breedInfo.description.substring(0, 100)}...`}
            </p>
            {!expanded && breedInfo.description.length > 100 && (
              <button className={style.expandButton} onClick={toggleExpand}>Leer más</button>
            )}
          </div>
        ) : (
          <div className={style.breedInfo}>
            <h3>Raza desconocida</h3>
            <p>No hay información de raza disponible para este gatito.</p>
          </div>
        )}
      </div>
      <div className={style.controllerFavouriteButton}>
      {showButton && (
        <button className={style.favouriteButton} onClick={handleFavorite}>Añadir a Favoritos</button>
      )}
      </div>
      {showMessage && <p><strong>Añadido a Favoritos</strong></p>}
      <div className={style.adopt}>
      <Button to="adopt-form" />
      </div>
      
    </div>
  );
}

export default CatCard;