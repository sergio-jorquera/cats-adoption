import React, { useState, useEffect, useContext } from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';
import { FavoritesContext } from '../../pages/FavoritesContext';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../reducers/favoritesReducer';

function CatCard({ cat }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  const isFavorite = favoritesState.favorites.some((fav) => fav.id === cat.id);

  useEffect(() => {
    if (cat.breeds && cat.breeds.length > 0) {
      setBreedInfo(cat.breeds[0]);
    } else {
      setBreedInfo(null);
    }
  }, [cat.breeds]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      favoritesDispatch({ type: REMOVE_FAVORITE, payload: cat });
    } else {
      favoritesDispatch({ type: ADD_FAVORITE, payload: cat });
    }
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
      <button onClick={handleFavorite}>
        {isFavorite ? 'Eliminar de favoritos' : 'AÑADIR a Favoritos'}
      </button>
      <Button to="adopt" />
    </div>
  );
}

export default CatCard;