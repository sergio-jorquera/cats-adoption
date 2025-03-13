import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdoptPage from '../pages/AdoptPage';

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;