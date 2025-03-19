import { useState, useEffect } from "react";
import style from "./CatSlider.module.css"; 
import CatService from "../../services/catService"; 
import CatCard from "../CatCard/CatCard"; 

export default function Slider() {
  const [cats, setCats] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isVisible, setIsVisible] = useState(true);
  const itemsPerSlide = 5; // Número de tarjetas que se muestran por vez

  // desde aquí llamamos a CatService y no desde la card
  useEffect(() => {
    const fetchCats = async () => {
      const data = await CatService.getCats(); 
      setCats(data); // Establecemos los datos en el estado
    };

    fetchCats();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

 
  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex < cats.length ? nextIndex : 0; // Vuelve al principio cuando llega al final
    });
    setIsVisible(true);
  },800);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(()=>{
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - itemsPerSlide;
      return prevIndexNew >= 0 ? prevIndexNew : cats.length - itemsPerSlide; // Vuelve al final cuando llega al principio
    });
    setIsVisible(true);
  },800);
  };

  if (cats.length === 0) {
    return <div>Cargando gatos...</div>;
  }

  return (
    <div className={style.sliderContainer}>
      {/* Botón de anterior */}
      <button onClick={prevSlide} className={style.arrow} id={style.prevButton}>◀</button>
      
      {/* Contenedor de las tarjetas */}
      <div className={`${style.sliderContent} ${!isVisible ? style.hidden : ''}`}>
        {cats.slice(currentIndex, currentIndex + itemsPerSlide).map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
      
      {/* Botón de siguiente */}
      <button onClick={nextSlide} className={style.arrow} id={style.nextButton}>▶</button>
    </div>
  );
}  
