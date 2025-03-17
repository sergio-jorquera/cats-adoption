import React from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';

function CatCard({ cat, onAdopt }) {
  return (
    <div className={style.cat-card}>
      <img className={style.cat-image} src={cat.url} alt="Gatito" />
      <Button to='adopt'/>
    </div>
  );
}

export default CatCard;