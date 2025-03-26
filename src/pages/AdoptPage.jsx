import React from "react";
import Button from "../Components/Button/Button.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import './styles/AdoptPage.css'
import "./../App.css";

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
};