import React from 'react';
import Button from '../Button/Button';

function CatCard({ cat, onAdopt }) {
  return (
    <div>
      <img src={cat.url} alt="Gatito" style={{ maxWidth: '300px' }} />
      <Button onClick={() => onAdopt(cat)}>¡Adóptame!</Button>
    </div>
  );
}

export default CatCard;