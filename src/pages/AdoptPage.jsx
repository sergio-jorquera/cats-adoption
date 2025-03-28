import {useContext, useEffect} from "react";
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import styles from './styles/AdoptPage.module.css';
import { translateAdoptPage } from "../translates/translates.js";
import "./../App.css";


export default function AdoptPage() {
  const { langEng } = useContext(LanguageContext);
  const text = translateAdoptPage(langEng);

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