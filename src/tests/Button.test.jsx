import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../Components/Button/Button.jsx";
import { LanguageProvider, LanguageContext } from "../context/LanguageContext.jsx";

test("El botón tiene la clase correcta 'button'", () => {
  const mockLangEng = true;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="adopt" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  const button = screen.getByRole("button");

  expect(button).toHaveClass("Button");
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/adopt'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="adopt" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  expect(screen.getByText("¡Adóptame!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/adopt-form'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="adopt-form" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  expect(screen.getByText("¡Adóptame!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="/" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  expect(screen.getByText("Volver a inicio")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/adopt'", () => {
  const mockLangEng = true;

  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng}}>
    <MemoryRouter>
      <Button to="adopt" />
    </MemoryRouter>
    </LanguageContext.Provider>
  );

  expect(screen.getByText("Adopt me!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/adopt-form'", () => {
  const mockLangEng = true;

  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng}}>
    <MemoryRouter>
      <Button to="adopt-form" />
    </MemoryRouter>
    </LanguageContext.Provider>
  );

  expect(screen.getByText("Adopt me!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/'", () => {
  const mockLangEng = true;

  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng}}>
    <MemoryRouter>
      <Button to="/" />
    </MemoryRouter>
    </LanguageContext.Provider>
  );
  expect(screen.getByText("Back to home")).toBeInTheDocument();
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("El botón lleva a la página requerida '/adopt'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="adopt" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  const button = screen.getByRole("button")
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/adopt");
});

test("El botón lleva a la página requerida '/'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="/" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  const button = screen.getByRole("button")
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/");
});

test("El botón lleva a la página requerida '/adopt-form'", () => {
  const mockLangEng = false;
  render(
    <LanguageContext.Provider value={{ langEng: mockLangEng }}>
      <MemoryRouter>
        <Button to="adopt-form" />
      </MemoryRouter>
    </LanguageContext.Provider>
  );

  const button = screen.getByRole("button")
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/adopt-form");
});
