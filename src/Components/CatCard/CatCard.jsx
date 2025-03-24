import React from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';

function CatCard({ cat, onAdopt }) {
  return (
    <div className={style.catCard}>
      <img className={style.catImage} src={cat.url} alt="Gatito" />
      <Button to='adopt-form'/>
    </div>
  );
}

export default CatCard;