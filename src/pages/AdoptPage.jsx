import React from "react";
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "./../context/LanguageContext.jsx";
import { useContext } from "react";
import './styles/AdoptPage.css'
import "./../App.css";

export default function AdoptPage() {
   const {langEng} = useContext(LanguageContext);
   const textParagraph = langEng ? "Website currently under construction" : "Página web actualmente en construcción";
  return (
    <>
      <Header />
      <div id="mainAdopt">
        <div id="mainContent">
        <p>{textParagraph}</p>
        <Button className="buttonAdoptPage" to=""></Button>
        </div>
      </div>
      <Footer />
      </>
  );
};