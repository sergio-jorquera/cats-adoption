import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import style from './CatCard.module.css';

function CatCard({ cat, onAdopt }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (cat.breeds && cat.breeds.length > 0) {
      setBreedInfo(cat.breeds[0]);
    } else {
      setBreedInfo(null);
    }
  }, [cat.breeds]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={style.catCard}>
      <img className={style.catImage} src={cat.url} alt="Gatito" />
      <div className={style.infoContainer}> {/* Nuevo contenedor para la información */}
        {breedInfo ? (
          <div className={`${style.breedInfo} ${expanded ? style.expanded : ''}`}>
            <h3>{breedInfo.name}</h3>
            <p>{expanded ? breedInfo.description : `${breedInfo.description.substring(0, 100)}...`}</p>
            {!expanded && breedInfo.description.length > 100 && (
              <button onClick={toggleExpand}>Leer más</button>
            )}
          </div>
        ) : (
          <div className={style.breedInfo}>
            <h3>Raza desconocida</h3>
            <p>No hay información de raza disponible para este gatito.</p>
          </div>
        )}
      </div>
      <Button to="adopt" />
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