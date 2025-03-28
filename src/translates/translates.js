export function translateAdoptForm(eng) {
  return eng
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
        messagePlaceholder: "250 characters max.",
        errors: {
          fullname: "You must enter at least first and last name",
          email: "Please enter a valid email",
          phone: "Enter a valid phone number",
          city: "Please enter a valid city",
          terms: "You must accept the terms and conditions",
        },
        documentTitle: "Adoption form",
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
        messagePlaceholder: "Maximo 250 caracteres.",
        terms: "Acepta que tratemos sus datos para poder contactar con usted.",
        submit: "Enviar",
        errors: {
          fullname: "Debe ingresar al menos nombre y apellido",
          email: "Por favor, introduce un correo válido",
          phone: "Introduce un número de teléfono válido",
          city: "Por favor, introduzca una localidad válida",
          terms: "Debes aceptar los términos y condiciones",
        },
        documentTitle: "Formulario de adopcíon",
        successMessage:
          "Datos enviados correctamente. Le contactaremos en breve.",
      };
}

export function translateFavoritesPage(eng) {
  return eng
    ? {
        title: "Favorites",
        message: "You don't have favorites",
        buttonText: "delete",
      }
    : {
        title: "Favoritos",
        message: "No tienes favoritos",
        buttonText: "Eliminar",
      };
}

export function translateHomePage(eng) {
  return eng
    ? {
        documentTitle: "Adopt a kitten",
        pagetitle: "Adopt a Kitten",
        description: "Find your new best friend among our adorable kittens!",
      }
    : {
        documentTitle: "Adopta un Gatito",
        pagetitle: "Adopta un Gatito",
        description:
          "¡Encuentra a tu nuevo mejor amigo entre nuestros adorables gatitos!",
      };
}

export function translateAdoptPage(eng) {
  return eng
    ? {
        title: "Website currently under construction:",
        documentTitle: "In construction",
      }
    : {
        title: "Página web actualmente en construcción",
        documentTitle: "En construccíon",
      };
}

export function translateButton(eng, to) {
  return eng
    ? to === "adopt" || to === "adopt-form"
      ? "Adopt me!"
      : "Back to home"
    : to === "adopt" || to === "adopt-form"
    ? "¡Adóptame!"
    : "Volver a inicio";
}

export function translateCatCard(eng) {
  return eng
    ? {
        raceError: "Unknown race",
        descriptionError:
          "There is no breed information available for this kitten",
        buttonText: "Add to favorites",
        advertMessge: "Added to favorites",
      }
    : {
        raceError: "Raza desconocida",
        descriptionError:
          "No hay información de raza disponible para este gatito",
        buttonText: "Añadir a favoritos",
        advertMessge: "Añadido a favoritos",
      };
}

export function translateCatList(eng) {
  return eng
    ? {
        title: "Kitten list",
      }
    : {
        title: "Lista de Gatitos",
      };
}

export function translateFooter(eng) {
  return eng
    ? {
        firstText: "Project carried out by:",
        secondText:
          "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. All rights reserved.",
      }
    : {
        firstText: "Proyecto realizado por:",
        secondText:
          "Sergio Jorquera, Saturnino Méndez y Rubén Ortega. Todos los derechos reservados.",
      };
}

export function translateHeader(eng) {
  return eng
    ? {
        name: "Happy Kittens",
        element1: "Home",
        element2: "Adopt a kitten",
        element3: "Favorites",
        lang: "Español",
        textAlt: "Adopt a kitten logo",
      }
    : {
        name: "Gatitos Felices",
        element1: "Inicio",
        element2: "Adopta un gatito",
        element3: "Favoritos",
        lang: "English",
        textAlt: "Adopta un gatito logo",
      };
}

export function translateTheme(eng, theme) {
  return eng
    ? theme === "light"
      ? "Dark theme"
      : "Light theme"
    : theme === "light"
    ? "Tema oscuro"
    : "Tema claro";
}
