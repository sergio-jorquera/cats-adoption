import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./pages/FavoritesContext";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;