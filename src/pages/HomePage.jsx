import React from 'react';
import CatSlider from '../Components/CatSlider/CatSlider';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./styles/HomePage.module.css"


function HomePage() {
 
  return (
    <div className={styles.containerPage}>
      <Header/>
      <h1>Adopta un Gatito</h1>
      <div className={styles.containerSlider}>
      <CatSlider/>
      </div>
      <Footer/>
  </div>
  );
}

export default HomePage;