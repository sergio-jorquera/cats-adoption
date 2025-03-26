import React, { useReducer, useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { useContext } from "react";
import "./styles/AdoptForm.css";
import "./../App.css";

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

function langSelection(langEng) {
  return langEng
    ? {
        mainTitle: "Happy Kittens",
        description:
          "Adopt a cat and make it happy, it will make you happy too! Fill out the form to start the process.",
        contactNumber: "+34 999 999 999",
        contactEmail: "gatitosfelices99@gmail.com",
        location: "Madrid, Spain",
        formTitle: "Adoption Form:",
        fullName: "Full name:",
        email: "E-mail:",
        phone: "Phone number:",
        city: "City:",
        message: "Message: ",
        terms: "Accept that we process your data to contact you.",
        submit: "Submit",
        errors: {
          fullname: "You must enter at least first and last name",
          email: "Please enter a valid email",
          phone: "Enter a valid phone number",
          terms: "You must accept the terms and conditions",
          
        },
        documentTitle: "Adoption from",
        successMessage: "Data sent successfully. We will contact you soon.",
      }
    : {
        mainTitle: "Gatitos Felices",
        description:
          "Adopta un gato y hazlo feliz, te hará feliz a ti también! Rellena el formulario para iniciar el proceso.",
        contactNumber: "+34 999 999 999",
        contactEmail: "gatitosfelices99@gmail.com",
        location: "Madrid, España",
        formTitle: "Formulario de Adopción:",
        fullName: "Nombre completo:",
        email: "E-mail:",
        phone: "Número de teléfono:",
        city: "Localidad:",
        message: "Mensaje:",
        terms: "Acepta que tratemos sus datos para poder contactar con usted.",
        submit: "Enviar",
        errors: {
          fullname: "Debe ingresar al menos nombre y apellido",
          email: "Por favor, introduce un correo válido",
          phone: "Introduce un número de teléfono válido",
          terms: "Debes aceptar los términos y condiciones",
         
        
        },
        documentTitle: "Formulario de adopcíon",
        successMessage: "Datos enviados correctamente. Le contactaremos en breve.",
      };
}

export default function AdoptPage() {
  const { langEng } = useContext(LanguageContext); // ⬅️ Obtener idioma desde el contexto
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const text = langSelection(langEng); // ⬅️ Pasar el idioma al selector de texto

  useEffect(() => {
    document.title = text.documentTitle;
  }, [langEng])
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "fullName" && value !== "" && !/^[a-zA-Z\s]+$/.test(value))
      return;
    if (name === "phone" && !/^\+?[0-9]{0,15}$/.test(value)) return;
    if (name === "city" && value !== "" && !/^[a-zA-Z\s]+$/.test(value)) return;

    dispatch({ name, value: type === "checkbox" ? checked : value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};


    if (
      !/^[a-zA-Z\s]+$/.test(formData.fullName) ||
      formData.fullName.trim().split(" ").length < 2
    ) {
      newErrors.fullName = text.errors.fullname;
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = text.errors.email;
    }

    if (!/^\+?[0-9]{9,15}$/.test(formData.phone)) {
      newErrors.phone = text.errors.phone;
    }

    if (!formData.terms) {
      newErrors.terms = text.errors.terms;
    }
    console.log("Errores detectados:", newErrors);

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert(text.successMessage); 
    }
  };

  return (
    <>
      <Header />
      <div className="mainAdopt">
        <div className="mainLeft">
          <div className="mainContentLeft">
            <h1>{text.mainTitle}</h1>
            <p className="description">{text.description}</p>
            <ul>
              <li>
                <FiPhone /> {text.contactNumber}
              </li>
              <li>
                <FiMail /> {text.contactEmail}
              </li>
              <li>
                <FiMapPin /> {text.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="mainRight">
          <div className="mainContentRight">
            <h2>{text.formTitle}</h2>
            <form onSubmit={handleSubmit} className="adopt-form">
              <div className="formdiv-field">
                <label>{text.fullName}</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  
                />
                {errors.fullName && (
                  <p className="error-text">{errors.fullName}</p>
                )}
              </div>
              <div className="formdiv-field">
                <label>{text.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="formdiv-field">
                <label>{text.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                 
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
              <div className="formdiv-field">
                <label>{text.city}</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  />
                  {errors.city && <p className="error-text">{errors.city}</p>}
                
              </div>
    
              <div className="formdiv-field">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label>{text.terms}</label>
                {errors.terms && <p className="error-text">{errors.terms}</p>}
              </div>
              <button className="submitButton" type="submit">{text.submit}</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
