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
  const itemsPerSlide = 5;

  useEffect(() => {
    const fetchCats = async () => {
      const data = await CatService.getCats();
      setCats(data);

      // Si está en inglés, traducir descripciones
      if (langEng) {
        const translatedData = await Promise.all(
          data.map(async (cat) => ({
            ...cat,
            description: await translateText(cat.description, "en"),
          }))
        );
        setTranslatedCats(translatedData);
      } else {
        setTranslatedCats(data);
      }
    };

    fetchCats();
  }, [langEng]); // Se actualiza cuando cambia el idioma

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerSlide < translatedCats.length ? prevIndex + itemsPerSlide : 0
      );
      setIsVisible(true);
    }, 800);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - itemsPerSlide >= 0 ? prevIndex - itemsPerSlide : translatedCats.length - itemsPerSlide
      );
      setIsVisible(true);
    }, 800);
  };

  if (translatedCats.length === 0) {
    return <div>Cargando gatos...</div>;
  }

  return (
    <div className={style.sliderContainer}>
      <button onClick={prevSlide} className={style.arrow} id={style.prevButton}>◀</button>
      
      <div className={`${style.sliderContent} ${!isVisible ? style.hidden : ''}`}>
        {translatedCats.slice(currentIndex, currentIndex + itemsPerSlide).map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
      
      <button onClick={nextSlide} className={style.arrow} id={style.nextButton}>▶</button>
    </div>
  );
}  
