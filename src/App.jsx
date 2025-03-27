import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./pages/FavoritesContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <FavoritesProvider>
      <LanguageProvider>
      <ThemeProvider>
         <AppRoutes />
       </ThemeProvider>
      </LanguageProvider>
    </FavoritesProvider>
  );
}

export default App;