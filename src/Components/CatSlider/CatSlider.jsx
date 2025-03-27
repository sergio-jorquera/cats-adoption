import { useState, useEffect, useContext } from "react";
import style from "./CatSlider.module.css"; 
import CatService from "../../services/catService"; 
import CatCard from "../CatCard/CatCard"; 
import { LanguageContext } from "../../context/LanguageContext";
import { translateText } from "../../services/translateService";

export default function Slider() {
  const { langEng } = useContext(LanguageContext);
  const [cats, setCats] = useState([]); 
  const [translatedCats, setTranslatedCats] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isVisible, setIsVisible] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
 

  // Obtener los gatos solo UNA VEZ
  useEffect(() => {
    const fetchCats = async () => {
      const data = await CatService.getCats();
      setCats(data);
      setTranslatedCats(data); // Inicialmente sin traducir
    };

    fetchCats();
  }, []); // Se ejecuta SOLO al montar el componente

  // Traducir SOLO las cards en pantalla cuando cambia el idioma
  useEffect(() => {
    if (!langEng) {
      setTranslatedCats(cats);
      return;
    }

    const translateVisibleCats = async () => {
      const visibleCats = cats.slice(currentIndex, currentIndex + itemsPerSlide);
      console.log("Gatos visibles antes de traducir:", visibleCats);

      try {
        const translatedData = await Promise.all(
          visibleCats.map(async (cat) => ({
            ...cat,
            description: cat.breeds?.[0]?.description
              ? await translateText(cat.breeds[0].description, "en")
              : "No description available",
          }))
        );
  
        console.log("Gatos traducidos:", translatedData);
  
        const updatedCats = [...cats];
        translatedData.forEach((translatedCat, index) => {
          updatedCats[currentIndex + index] = translatedCat;
        });
  
        setTranslatedCats(updatedCats);
        console.log("Estado actualizado con traducciones:", updatedCats);
      } catch (error) {
        console.error("Error al traducir:", error);
      }
    };
  
    translateVisibleCats();
  }, [langEng, currentIndex, cats, itemsPerSlide]);


  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth; 
      if (width < 500) {
        setItemsPerSlide(1); 
      } else if (width >= 500 && width < 800) {
        setItemsPerSlide(3); 
      } 
    };

    updateItemsPerSlide(); // Llamamos a la función inmediatamente para ajustar los items
    window.addEventListener("resize", updateItemsPerSlide); // Escuchar los cambios de tamaño

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []); // Se ejecuta solo una vez al inicio

  

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerSlide < cats.length ? prevIndex + itemsPerSlide : 0
      );
      setIsVisible(true);
    }, 800);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - itemsPerSlide >= 0 ? prevIndex - itemsPerSlide : cats.length - itemsPerSlide
      );
      setIsVisible(true);
    }, 800);
  };

  if (translatedCats.length === 0) {
    return <div>{langEng ? "Loading kittens..." : "Cargando gatitos..."}</div>;
  }

  return (
    <div className={style.sliderContainer}>
      <button onClick={prevSlide} className={style.arrow} id={style.prevButton}>◀</button>
      
      <div className={`${style.sliderContent} ${!isVisible ? style.hidden : ''}`}>
        {translatedCats.slice(currentIndex, currentIndex + itemsPerSlide).map((cat, index) => (
          <CatCard className={style.cardWidth} key={index} cat={cat} />
        ))}
      </div>
      
      <button onClick={nextSlide} className={style.arrow} id={style.nextButton}>▶</button>
    </div>
  );
}  
