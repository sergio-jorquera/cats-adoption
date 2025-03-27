// src/components/CatList.jsx

import React, { useState, useEffect } from 'react';
import CatService from '../../services/catService.js';
import CatCard from '../CatCard/CatCard.jsx';

function CatList() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const fetchedCats = await CatService.getCats();
      setCats(fetchedCats);
    }
    fetchCats();
  }, []);

  return (
    <div>
      <h1>Lista de Gatitos</h1>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default CatList;