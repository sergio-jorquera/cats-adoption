// src/components/CatList.jsx

import React, { useState, useEffect } from 'react';
import CatService from '../../services/catService.js';
import CatCard from '../CatCard/CatCard.jsx';
import { translateCatList } from '../../translates/translates.js';

function CatList() {
  const [cats, setCats] = useState([]);
  const { langEng } = useContext(LanguageContext);

  const text = translateCatList(langEng)

  useEffect(() => {
    async function fetchCats() {
      const fetchedCats = await CatService.getCats();
      setCats(fetchedCats);
    }
    fetchCats();
  }, []);

  return (
    <div>
      <h1>{text.title}</h1>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default CatList;