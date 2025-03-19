import React from "react";
import Routes from "./routes/AppRoutes"; // 👈 Renombrado para evitar conflicto
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";


function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
 
  )
}

export default App;
