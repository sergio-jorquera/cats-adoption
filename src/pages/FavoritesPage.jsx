import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../pages/FavoritesContext";
import CatCard from "../Components/CatCard/CatCard.jsx";
import { REMOVE_FAVORITE } from "../reducers/favoritesReducer";
import { LanguageContext } from "../context/LanguageContext.jsx";
import Header from "./../Components/Header/Header.jsx";
import Footer from "./../Components/Footer/Footer.jsx";
import style from "./styles/FavoritesPage.module.css";
import { translateFavoritesPage } from "../translates/translates.js";

function FavoritesPage() {
  const { langEng } = useContext(LanguageContext);
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  const text = translateFavoritesPage(langEng);

  useEffect(() => {
    document.title = text.title;
  }, [langEng]);

  const handleRemove = (cat) => {
    favoritesDispatch({ type: REMOVE_FAVORITE, payload: cat });
  };

  return (
    <div>
      <Header />
      <div className={style.body}>
        <div className={style.textH1}>
          <h1>{text.title}</h1>
        </div>
        {favoritesState.favorites.length === 0 ? (
          <p>{text.message}</p>
        ) : (
          <div className={style.cardContainer}>
            {favoritesState.favorites.map((cat) => (
              <div key={cat.id} className={style.cardItem}>
                {/* Tarjeta */}
                <CatCard cat={cat} />

                {/* Botón de eliminar */}
                <div className={style.buttonContainer}>
                  <button className={style.buttonDelete} onClick={() => handleRemove(cat)}>
                    {text.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
