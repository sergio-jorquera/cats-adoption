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
      <Button to='adopt-form'/>
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