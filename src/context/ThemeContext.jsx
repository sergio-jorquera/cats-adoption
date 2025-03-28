import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light"); 
    
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
    useEffect(() => {
      document.body.className = theme; // Establece la clase en el body
    }, [theme]);
   
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
    );
  };