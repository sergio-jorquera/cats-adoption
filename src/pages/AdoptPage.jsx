import {useContext, useEffect} from "react";
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import styles from './styles/AdoptPage.module.css';
import "./../App.css";

function langSelection(langEng) {
  return langEng
    ? {
        title: "Website currently under construction:",
        documentTitle: "In construction",
      }
    : {
        title: "Página web actualmente en construcción",
        documentTitle: "En construccíon",
      };
};

export default function AdoptPage() {
  const { langEng } = useContext(LanguageContext);
  const text = langSelection(langEng);

  useEffect(() => {
    document.title = text.documentTitle;
  }, [langEng]);
  
  return (
    <>
      <Header />
      <div className={styles.mainAdopt}>
        <div className={styles.mainContent}>
        <p>{text.title}</p>
        <Button to="" className={styles.buttonAP}></Button>
        </div>
      </div>
      <Footer />
      </>
  );
};