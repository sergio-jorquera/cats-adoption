import React from 'react'
import { createContext, useState } from 'react'

export const LanguageContext = createContext();

export const LanguageProvider = ({children})=> {
    const [langEng, setLangEng] = useState(false);
    const toggleLanguage = () => setLangEng ((prev) => !prev) 

 

  return (
   < LanguageContext.Provider value={{langEng, toggleLanguage}}>
    {children}
    </LanguageContext.Provider>

  );
};
