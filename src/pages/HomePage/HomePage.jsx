import React from 'react';
import CatSlider from '../../Components/CatSlider/CatSlider';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header/>
      <h1>Adopta un Gatito</h1>
      <CatSlider />
      <Footer/>
  </div>
  );
}

export default HomePage;