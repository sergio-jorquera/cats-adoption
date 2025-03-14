import React from 'react';
import Button from '../Button/Button';
import './CatCard.css'; // Importa el archivo de estilos

function CatCard({ cat, onAdopt }) {
  return (
    <div className="cat-card">
      <img src={cat.url} alt="Gatito" className="cat-image" />
      <Button to='adopt'/>
    </div>
  );
}

export default CatCard;