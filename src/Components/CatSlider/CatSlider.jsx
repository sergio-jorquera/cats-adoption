import { useState, useEffect } from "react";
import "../../styles/Components.css"; // Importación de estilos globales
import CatService from "../../services/catService"; // Asegúrate de que esta ruta sea correcta
import CatCard from "../CatCard/CatCard"; // Asegúrate de que la ruta es correcta

export default function Slider() {
  const [cats, setCats] = useState([]); // Estado para almacenar las imágenes de los gatos
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual
  const itemsPerSlide = 5; // Número de tarjetas que se muestran por vez

  // Cargar las imágenes de gatos al montar el componente
  useEffect(() => {
    const fetchCats = async () => {
      const data = await CatService.getCats(); // Llamamos al servicio
      setCats(data); // Establecemos los datos en el estado
    };

    fetchCats();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Función para mostrar las siguientes 5 tarjetas
  const nextSlide = () => {
    // Asegurarse de que el índice no pase del límite
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex < cats.length ? nextIndex : 0; // Vuelve al principio cuando llega al final
    });
  };

  // Función para mostrar las anteriores 5 tarjetas
  const prevSlide = () => {
    // Asegurarse de que el índice no sea negativo
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - itemsPerSlide;
      return prevIndexNew >= 0 ? prevIndexNew : cats.length - itemsPerSlide; // Vuelve al final cuando llega al principio
    });
  };

  // Si no hay gatos cargados, mostrar mensaje de carga
  if (cats.length === 0) {
    return <div>Cargando gatos...</div>;
  }

  return (
    <div className="slider-content">
      <button onClick={prevSlide} className="arrow button prevButton">◀</button>
    
      <div className="slider-container">
        {/* Mostrar las 5 tarjetas actuales */}
        {cats.slice(currentIndex, currentIndex + itemsPerSlide).map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>

      <button onClick={nextSlide} className="arrow button nextButton">▶</button>
    </div>
  );
}
