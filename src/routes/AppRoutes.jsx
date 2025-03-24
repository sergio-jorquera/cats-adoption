import React from "react";
import {Routes, Route} from 'react-router-dom';
import AdoptPage from "../pages/AdoptPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AdoptForm from "../pages/AdoptForm.jsx";

export default function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adopt" element={<AdoptPage />} />
            <Route path="/adopt-form" element={<AdoptForm />} />
        </Routes>
        </>
    )
}