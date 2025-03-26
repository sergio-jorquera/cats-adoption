import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';
import { useContext } from 'react'; // Asegúrate de importar correctamente el hook del contexto
import { LanguageContext } from '../../context/LanguageContext';

function CatCard({ cat }) {
  const { langEng } =  useContext(LanguageContext); // Accede al valor langEng desde el contexto
 
 
  const [expanded, setExpanded] = useState(false);
  const textButton =langEng 
  ? (expanded ? 'See less' : 'See more') 
  : (expanded ? 'Ver menos' : 'Ver más');

  // Función para acortar el texto
  function textShorter(text) {
    let finalText = text.split('.');
    return finalText.length >= 2 ? finalText.slice(0, 2).join('.') + '.' : text;
  }

  // Alternar el estado de expandir/contraer la descripción
  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={style.catCard}>
      <img className={style.catImage} src={cat.url} alt="Gatito" />
      
      {cat.breeds && cat.breeds.length > 0 && (
        <div className={style.descriptionContainer}>
          <h3 className={style.catBreed}>{cat.breeds[0].name}</h3>
          <p className={`${style.catDescription} ${expanded ? style.expanded : ''}`}>
            {textShorter((cat.description || cat.breeds[0].description))}
          </p>
          <button className={style.expandButton} onClick={handleToggleExpand}>
            {textButton}
          </button>
        </div>
      )}

      <div className={style.adopt}>
        <Button to="adopt-form" />
      </div>
    </div>
  );
}

export default CatCard;



// import React from 'react';
// import Button from '../Button/Button';
// import style from './CatCard.module.css';

// function CatCard({ cat, onAdopt }) {
//   return (
//     <div className={style.catCard}>
//       <img className={style.catImage} src={cat.url} alt="Gatito" />
//       <Button to='adopt'/>
//     </div>
//   );
// }

// export default CatCard;