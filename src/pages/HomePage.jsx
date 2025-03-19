import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from "./../context/ThemeContext"
import CatSlider from '../Components/CatSlider/CatSlider';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Accede a toggleTheme
  return (
    <div className={theme}>
      <Header/>
      <h1>Adopta un Gatito</h1>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <CatSlider/>
      <Footer/>
  </div>
  );
}

export default HomePage;