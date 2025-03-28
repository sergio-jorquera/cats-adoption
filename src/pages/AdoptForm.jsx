import React, { useReducer, useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { useContext } from "react";
import styles from "./styles/AdoptForm.module.css";
import { translateAdoptForm } from "../translates/translates.js";
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

function isNotEmptyString(str) {
  return str.trim().length > 0;
}

export default function AdoptPage() {
  const { langEng } = useContext(LanguageContext); // ⬅️ Obtener idioma desde el contexto
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const text = translateAdoptForm(langEng); // ⬅️ Pasar el idioma al selector de texto

  useEffect(() => {
    document.title = text.documentTitle;
  }, [langEng]);

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

    if (!isNotEmptyString(formData.city)){
      newErrors.city = text.errors.city;
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
      <div className={styles.mainAdopt}>
        <div className={styles.mainLeft}>
          <div className={styles.mainContentLeft}>
            <h1 className={styles.primaryTitle}>{text.mainTitle}</h1>
            <p className={styles.description}>{text.description}</p>
            <ul>
              <li className={styles.list}>
                <FiPhone /> {text.contactNumber}
              </li>
              <li className={styles.list}>
                <FiMail /> {text.contactEmail}
              </li>
              <li className={styles.list}>
                <FiMapPin /> {text.location}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.mainContentRight}>
            <h2 className={styles.secondaryTitle}>{text.formTitle}</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formdiv}>
                <label>{text.fullName}</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className={styles.errorText}>{errors.fullName}</p>
                )}
              </div>
              <div className={styles.formdiv}>
                <label>{text.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </div>
              <div className={styles.formdiv}>
                <label>{text.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className={styles.errorText}>{errors.phone}</p>
                )}
              </div>
              <div className={styles.formdiv}>
                <label>{text.city}</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <p className={styles.errorText}>{errors.city}</p>
                )}
              </div>
              <div className={styles.formdiv}>
                <label>{text.message}</label>
                <textarea
                  className={styles.formTextarea}
                  name="message"
                  onChange={handleChange}
                  placeholder={text.messagePlaceholder}
                  maxLength={250}
                />
              </div>
              <div className={styles.formdiv}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label>{text.terms}</label>
                {errors.terms && <p className={styles.errorText}>{errors.terms}</p>}
              </div>
              <button className={styles.submitButton} type="submit">
                {text.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
