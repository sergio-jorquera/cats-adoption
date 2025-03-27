import React, { createContext, useReducer } from 'react';
import { favoritesReducer, initialState } from '../reducers/favoritesReducer';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider value={{ favoritesState, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}