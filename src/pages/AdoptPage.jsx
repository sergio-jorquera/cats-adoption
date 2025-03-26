import React, {useEffect, useContext} from "react";
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import "./styles/AdoptPage.css";
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
  return (
    <>
      <Header />
      <div id="mainAdopt">
        <div id="mainContent">
        <p>Página web actualmente en construcción:</p>
        <Button className="buttonAdoptPage" to=""></Button>
        </div>
      </div>
      <Footer />
    </>
  );
}