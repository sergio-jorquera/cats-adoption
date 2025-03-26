import React from 'react';
import { Link } from 'react-router-dom';
import CatList from '../Components/CatList/CatList';

function HomePage() {
  return (
    <div>
      
      {/* <Link to="/favorites">Ir a Favoritos</Link> */} 
      <CatList />
    </div>
  );
}

export default HomePage;