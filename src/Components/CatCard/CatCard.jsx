import React, { useState, useEffect, useContext } from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';
import { FavoritesContext } from '../../pages/FavoritesContext';
import { ADD_FAVORITE } from '../../reducers/favoritesReducer';

function CatCard({ cat }) {
  // Estado para la información de la raza del gato
  const [breedInfo, setBreedInfo] = useState(null);
  // Estado para controlar si la información de la raza está expandida
  const [expanded, setExpanded] = useState(false);
  // Estado para mostrar el mensaje "Añadido a Favoritos"
  const [showMessage, setShowMessage] = useState(false);
  // Estado para controlar la visibilidad del botón "Añadir a Favoritos"
  const [showButton, setShowButton] = useState(true);
  // Contexto para acceder al estado y al dispatch de favoritos
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  // Efecto secundario para obtener la información de la raza del gato
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

  // Función para expandir o contraer la información de la raza
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

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
          <div className={`${style.breedInfo} ${expanded ? style.expanded : ''}`}>
            <h3>{breedInfo.name}</h3>
            <p>
              {expanded
                ? breedInfo.description
                : `${breedInfo.description.substring(0, 100)}...`}
            </p>
            {!expanded && breedInfo.description.length > 100 && (
              <button onClick={toggleExpand}>Leer más</button>
            )}
          </div>
        ) : (
          <div className={style.breedInfo}>
            <h3>Raza desconocida</h3>
            <p>No hay información de raza disponible para este gatito.</p>
          </div>
        )}
      </div>
      <div className={style.buttonContainer}>
        {showButton && (
          <button onClick={handleFavorite}>Añadir a Favoritos</button>
        )}
        {showMessage && <p><strong>Añadido a Favoritos</strong></p>}
      </div>
      <Button to="adopt" />
    </div>
  );
}

export default CatCard;