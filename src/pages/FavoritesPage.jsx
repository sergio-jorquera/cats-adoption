import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../pages/FavoritesContext';
import CatCard from '../Components/CatCard/CatCard.jsx';
import { REMOVE_FAVORITE } from '../reducers/favoritesReducer';
import Header from "./../Components/Header/Header.jsx";
import Footer from "./../Components/Footer/Footer.jsx"

function FavoritesPage() {
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  const handleRemove = (cat) => {
    favoritesDispatch({ type: REMOVE_FAVORITE, payload: cat });
  };

  return (
    <div>
      <Header/>
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
      {/* <Link to="/">Volver a Inicio</Link> */}
    <Footer/>
    </div>

  );
}

export default FavoritesPage;