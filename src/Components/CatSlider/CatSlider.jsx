import { useState, useEffect } from "react";
import "./CatSlider.module.css"; 
import CatService from "../../services/catService"; 
import CatCard from "../CatCard/CatCard"; 

export default function Slider() {
  const [cats, setCats] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
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
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex < cats.length ? nextIndex : 0; // Vuelve al principio cuando llega al final
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - itemsPerSlide;
      return prevIndexNew >= 0 ? prevIndexNew : cats.length - itemsPerSlide; // Vuelve al final cuando llega al principio
    });
  };

  if (cats.length === 0) {
    return <div>Cargando gatos...</div>;
  }

  return (
    <div className="slider-container">
      {/* Botón de anterior */}
      <button onClick={prevSlide} className="arrow" id="prevButton">◀</button>
      
      {/* Contenedor de las tarjetas */}
      <div className="slider-content">
        {cats.slice(currentIndex, currentIndex + itemsPerSlide).map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
      
      {/* Botón de siguiente */}
      <button onClick={nextSlide} className="arrow" id="nextButton">▶</button>
    </div>
  );
}  
