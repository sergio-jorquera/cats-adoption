import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './../context/LanguageContext';  // Asegúrate de la ruta correcta
import CatSlider from '../Components/CatSlider/CatSlider';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./styles/HomePage.module.css";
import { translateHomePage } from '../translates/translates';


function HomePage() {
  const { langEng } = useContext(LanguageContext); // Accede al contexto de idioma

  const text = translateHomePage(langEng);

    useEffect(() => {
      document.title = text.documentTitle ;
    }, [langEng])
  
  // Definir los textos según el idioma
  const pageTitle = langEng ? "Adopt a Kitten" : "Adopta un Gatito";
  const description = langEng
    ? "Find your new best friend among our adorable kittens!"
    : "¡Encuentra a tu nuevo mejor amigo entre nuestros adorables gatitos!";

  return (
    <div className={styles.containerPage}>
      <Header />
      <div className={styles.divText}>
      <h1 className={styles.title}>{text.pagetitle}</h1> {/* El título cambia según el idioma */}
      <p className={styles.description}>{text.description}</p> {/* La descripción también cambia */}
      </div>
      <div className={styles.containerSlider}>
        <CatSlider />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
