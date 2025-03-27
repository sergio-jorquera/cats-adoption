import React from "react";
import Routes from "./routes/AppRoutes"; // 👈 Renombrado para evitar conflicto
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
    </LanguageProvider>
 
  )
}

export default App;
