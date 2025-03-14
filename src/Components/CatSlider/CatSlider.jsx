import { useState, useEffect } from "react";
import React from "react";
import CatService from "../../services/catService";
import "./../../styles/Components.css";
import CatCard from "../CatCard/CatCard";
import Button from "../Button/Button";

const CARDS_VISIBLE = 4; // Mostrar 4 gatos a la vez

const CatSlider = () => {
  const [cats, setCats] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      const fetchedCats = await CatService.getCats();
      console.log("Gatos obtenidos:", fetchedCats);
      setCats(fetchedCats);
      setLoading(false);
    };

    fetchCats();
  }, []);

  const handleNextClick = () => {
    setStartIndex((prev) => {
      // Si estamos al final de la lista, reiniciar el índice
      if (prev + CARDS_VISIBLE >= cats.length) {
        return 0; // Reiniciar al principio
      }
  
      return prev + CARDS_VISIBLE;
    });
  };
  
  const handlePrevClick = () => {
    setStartIndex((prev) => {
      const nextIndex = prev - CARDS_VISIBLE;
  
      // Si estamos al principio de la lista y retrocedemos más allá, ir al final
      if (nextIndex < 0) {
        return cats.length - (cats.length % CARDS_VISIBLE); // Regresar al último bloque de 4
      }
  
      return nextIndex;
    });
  };
  
  

  if (loading) {
    return <p>Cargando gatitos... 🐱</p>;
  }

  return (
    <div className="sliderContainer">
    {/* Botón Anterior (izquierda de las tarjetas) */}
    <Button className="prevButton" onClick={handlePrevClick}>←</Button>

    <div className="cardContainer">
      {cats.length > 0 ? (
        cats.slice(startIndex, startIndex + CARDS_VISIBLE).map((cat) => (
          <CatCard key={cat.id} cat={cat} onAdopt={() => alert(`¡Adoptaste a un gatito! 🐱`)} />
        ))
      ) : (
        <p>No hay gatos disponibles 😿</p>
      )}
    </div>

    {/* Botón Siguiente (derecha de las tarjetas) */}
    <Button className="nextButton" onClick={handleNextClick}>→</Button>
  </div>
    
  );
};

export default CatSlider;
