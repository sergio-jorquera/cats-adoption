import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../pages/FavoritesContext';
import CatCard from '../Components/CatCard/CatCard.jsx';

function FavoritesPage() {
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  const handleRemove = (cat) => {
    favoritesDispatch({ type: REMOVE_FAVORITE, payload: cat });
  };

  return (
    <div>
      <h1>Favoritos</h1>
      {favoritesState.favorites.length === 0 ? (
        <p>No tienes favoritos.</p>
      ) : (
        favoritesState.favorites.map((cat) => (
          <div key={cat.id}>
            <CatCard cat={cat} />
            <button onClick={() => handleRemove(cat)}>ELIMINAR</button>
          </div>
        ))
      )}
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
}

export default FavoritesPage;