import React, { useState, useEffect } from 'react';
import CatCard from '../CatCard/CatCard';
import CatService from '../../services/CatService';
import './CatSlider.css';

function CatSlider() {
  const [cats, setCats] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    async function fetchCats() {
      const data = await CatService.getCats();
      setCats(data);
    }
    fetchCats();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cats.length - visibleCount));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleCats = cats.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="cat-slider-container">
      <div className="cat-cards-container">
        <button className="slider-button prev" onClick={prevSlide} disabled={currentIndex === 0}>&lt;</button>
        <div className="cat-cards">
          {visibleCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} onAdopt={() => console.log('Adopted')} />
          ))}
        </div>
        <button className="slider-button next" onClick={nextSlide} disabled={currentIndex >= cats.length - visibleCount}>&gt;</button>
      </div>
    </div>
  );
}

export default CatSlider;