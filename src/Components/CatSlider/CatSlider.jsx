import React, { useState, useEffect } from 'react';
import CatCard from '../CatCard/CatCard';
import CatService from '../../services/CatService';

function CatSlider() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const data = await CatService.getCats();
      setCats(data);
    }
    fetchCats();
  }, []);

  const handleAdopt = (cat) => {
    console.log('¡Gatito adoptado!', cat);
    // Redirigir a la página de adopción
  };

  return (
    <div>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} onAdopt={handleAdopt} />
      ))}
    </div>
  );
}

export default CatSlider;