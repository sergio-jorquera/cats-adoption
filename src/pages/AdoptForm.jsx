import React, { useReducer, useState } from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./styles/AdoptForm.css";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  message: "",
  terms: false,
};

function formReducer(state, action) {
  return { ...state, [action.name]: action.value };
}

export default function AdoptPage() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "fullName" && !/^[a-zA-Z\s]+$/.test(value)) return;
    if (name === "phone" && !/^\+?[0-9]{0,15}$/.test(value)) return;
    if (name === "city" && !/^[a-zA-Z\s]+$/.test(value)) return;
    dispatch({ name, value: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(formData.fullName)) {
      newErrors.fullName = "Debe ingresar al menos dos palabras con solo letras.";
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo válido.";
    }

    if (!/^\+?[0-9]{9,15}$/.test(formData.phone)) {
      newErrors.phone = "El número de teléfono debe tener al menos 9 cifras y opcionalmente empezar con '+'.";
    }

    if (!formData.terms) {
      newErrors.terms = "Debes aceptar los términos y condiciones.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Datos enviados correctamente. Le contactaremos en breve.");
    }
  };

  return (
    <>
      <Header />
      <div id="mainAdopt">
        <div id="mainContent">
          <h1>Formulario de adopción</h1>
          <p>
            Rellene el siguiente formulario si esta interesado en adoptar y le
            contactaremos con más detalles:
          </p>
          <form onSubmit={handleSubmit} className="adopt-form">
            <div className="formdiv-field">
              <label className="form-labels">Nombre completo: </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                maxLength={50}
                required
              />
              {errors.fullName && <p className="error-text">{errors.fullName}</p>}
            </div>
            <div className="formdiv-field">
              <label className="form-labels">E-mail: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xxxx@xxx.xx"
                maxLength={30}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="formdiv-field">
              <label className="form-labels">Número de teléfono: </label>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+XXX(XXXXXXXX)"
                required
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div className="formdiv-field">
              <label className="form-labels">Localidad: </label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Localidad de residencia"
                maxLength={30}
                required
              />
            </div>
            <div className="formdiv-field">
              <label className="form-labels">Mensaje:</label>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escriba aquí su mensaje... (Máximo 250 caracteres)"
                maxLength={250}
                required
              />
            </div>
            <div className="formdiv-field">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="form-checkbox"
              />
              <label className="form-labels">
                Acepta que tratemos sus datos para poder contactar con usted.
              </label>
              {errors.terms && <p className="error-text">{errors.terms}</p>}
            </div>
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
