import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../Components/Button/Button.jsx";

test("El botón tiene la clase correcta 'button'", () => {
    render(
        <MemoryRouter>
            <Button to="adopt" langEng={false} />
        </MemoryRouter>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("Button");
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/adopt'", () => {
  render(
    <MemoryRouter>
      <Button to="adopt" langEng={false} />
    </MemoryRouter>
  );

  expect(screen.getByText("¡Adóptame!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/adopt-form'", () => {
  render(
    <MemoryRouter>
      <Button to="adopt-form" langEng={false} />
    </MemoryRouter>
  );

  expect(screen.getByText("¡Adóptame!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ESP) con '/'", () => {
  render(
    <MemoryRouter>
      <Button to="/" langEng={false} />
    </MemoryRouter>
  );

  expect(screen.getByText("Volver a inicio")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/adopt'", () => {
  render(
    <MemoryRouter>
      <Button to="adopt" langEng={true} />
    </MemoryRouter>
  );

  expect(screen.getByText("Adopt me!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/adopt-form'", () => {
  render(
    <MemoryRouter>
      <Button to="adopt-form" langEng={true} />
    </MemoryRouter>
  );

  expect(screen.getByText("Adopt me!")).toBeInTheDocument();
});

test("El botón muestra el texto requerido, en el idioma requerido (ENG) con '/'", () => {
  render(
    <MemoryRouter>
      <Button to="/" langEng={true} />
    </MemoryRouter>
  );

  expect(screen.getByText("Back to home")).toBeInTheDocument();
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("El botón lleva a la página requerida '/adopt'", () => {
  const mockNavigate = require("react-router-dom").useNavigate();

  render(
    <MemoryRouter>
      <Button to="adopt" langEng={false} />
    </MemoryRouter>
  );

  const button = screen.getByText("¡Adóptame!");
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/adopt");
});

test("El botón lleva a la página requerida '/adopt-form'", () => {
  const mockNavigate = require("react-router-dom").useNavigate();

  render(
    <MemoryRouter>
      <Button to="adopt-form" langEng={false} />
    </MemoryRouter>
  );

  const button = screen.getByText("¡Adóptame!");
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/adopt-form");
});

test("El botón lleva a la página requerida '/'", () => {
  const mockNavigate = require("react-router-dom").useNavigate();

  render(
    <MemoryRouter>
      <Button to="/" langEng={false} />
    </MemoryRouter>
  );

  const button = screen.getByText("Volver a inicio");
  fireEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith("/");
});
