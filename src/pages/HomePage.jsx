import React from 'react';
import CatSlider from '../components/CatSlider/CatSlider';
import './HomePage.css'; // Asegúrate de que esta línea esté presente

function HomePage() {
  return (
    <div className="home-page">
      <h1>Adopta un Gatito</h1>
      <CatSlider />
    </div>
  );
}

export default HomePage;