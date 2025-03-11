import { useState } from 'react';
import React from 'react'
import "./../../styles/Components.css"


const CatSlider = () => {
    const [card, setCard] = useState([0, 1, 2, 3]); 
    const totalCards = sliderCards.length;

  
  const handleNextClick = () => {
    setCard((prev) =>
      prev.map((index) => (index + 1) % totalCards) 
    );
  };

  
  const handlePrevClick = () => {
    setCard((prev) =>
      prev.map((index) => (index - 1 + totalCards) % totalCards) 
    );
  };
  
  
  
    return (
        <div className="cardContainer">
        <div className="cardsShown">
          {card.map((index) => {
            const cardData = sliderCards[index]; // Obtener los datos de la tarjeta actual
            return (
              <div key={cardData.id} className="dataCard">
                <h2>{cardData.title}</h2>
                <p>{cardData.description}</p>
              </div>
            );
          })}
        </div>
  
       
        <div className="bottonsCards">
          <Button onClick={handlePrevClick}>← Anterior</Button>
          <Button onClick={handleNextClick}>Siguiente →</Button>
        </div>
      </div>
    );
  };
export default CatSlider