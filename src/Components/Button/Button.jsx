import React from "react";
import {useNavigate} from 'react-router-dom';
import AppRoutes from "../../routes/AppRoutes";

export default function Button({to}) {
    const navigate = useNavigate();
    let textButton = "";

    const handleNavigation = () => {
        if (to === "adopt") {
            navigate('/adopt');
        } else {
            navigate('/');
        }
    };

    textButton = to === "adopt" ? "¡Adoptame!" : "Volver a Inicio";

    return (
        <>
        <button type="button" onClick={handleNavigation}>{textButton}</button>
        </>
    );    
};