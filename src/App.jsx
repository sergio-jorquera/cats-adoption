import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./pages/FavoritesContext";
import Header from "./Components/Header/Header"; // Importa el Header
import Footer from "./Components/Footer/Footer"; // Importa el Footer
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider>
        <Header /> {/* Renderiza el Header */}
        <AppRoutes />
        <Footer /> {/* Renderiza el Footer */}
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;