# 🐱 Cats Adoption

**Cats Adoption** es una aplicación web desarrollada con React y Vite que facilita la adopción de gatos de la web **Gatitos Felices**, permitiendo a los usuarios ver información detallada sobre cada gato disponible y ponerse en contacto con los refugios correspondientes.

## 🚀 Tecnologías Utilizadas

- 🖥️ **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- ⚡ **Vite**: Herramienta de desarrollo que proporciona un entorno rápido y optimizado para proyectos React.
- 🌈 **CSS3**: Estilización y diseño responsivo de la aplicación.

## 🇯️🇰 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/cats-adoption
│── /public              # 📁 Archivos estáticos
│   └── /images          # 🖼️ Imágenes y favicon
│── /src                 # 📁 Código fuente de la aplicación
│   │── /assets          # 🎨 Recursos estáticos (fuentes, íconos, imágenes)
│   │   └── /fonts       # 🔤 Fuentes tipográficas
│   │── /components      # 🏗️ Componentes reutilizables
│   │   ├── Button       # 🔘 Botón reutilizable
│   │   ├── CatCard      # 🐱 Tarjeta de gato
│   │   ├── CatList      # 📋 Lista de gatos
│   │   ├── CatSlider    # 🎞️ Carrusel de gatos
│   │   ├── Footer       # 👣 Pie de página
│   │   └── Header       # 🏠 Encabezado
│   │── /context         # ⚙️ Contextos globales (tema, idioma)
│   │── /pages           # 📄 Páginas principales de la aplicación
│   │   ├── AdoptForm    # 📝 Formulario de adopción
│   │   ├── AdoptPage    # 🏡 Página de adopción
│   │   ├── FavoritesPage# ❤️ Página de favoritos
│   │   ├── HomePage     # 🏠 Página principal
│   │   └── styles       # 🎨 Estilos de las páginas
│   │── /reducers        # 🔄 Reducers para manejo de estado
│   │── /routes          # 🚏 Configuración de rutas
│   │── /services        # 🔧 Servicios para API y utilidades
│   │── /tests           # 🧪 Pruebas automatizadas
│   ├── App.css          # 🎨 Estilos globales
│   ├── App.jsx          # 🏗️ Componente principal de la aplicación
│   ├── index.css        # 🎨 Estilos generales
│   ├── index.js         # 🔰 Entrada de la aplicación
│   └── main.jsx         # 🚪 Punto de entrada de React
│── .gitignore           # 🚫 Archivos y directorios ignorados por Git
│── package.json         # 📜 Dependencias y scripts del proyecto
│── vite.config.js       # ⚙️ Configuración de Vite
└── README.md            # 📖 Documentación del proyecto
```

## 🛠️ Desarrollo

Para obtener una copia local del código, clona el repositorio utilizando git:

```bash
git clone https://github.com/sergio-jorquera/cats-adoption.git
cd cats-adoption
```

Instala las dependencias:

```bash
npm install
```

Ahora, puedes iniciar un servidor web local ejecutando:

```bash
npm run dev
```

Luego, puedes abrir [<span style="color:blue;">http://localhost:5173</span>](http://localhost:5173) para verlo en el navegador.

## 📝 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev` ▶️ Inicia la aplicación en modo desarrollo.
- `npm run build` 🏗️ Construye la aplicación para producción en la carpeta `dist`.
- `npm run preview` 👀 Previsualiza la aplicación construida para producción.

## 👨‍💻 Créditos

Cats Adoption ha sido desarrollado por [Sergio Jorquera](https://github.com/sergio-jorquera), [FrostyValue](https://github.com/FrostyValue) y [KeisyRaiback](https://github.com/KeisyRaiback).

## 📚 Licencia

Cats Adoption es un software de código abierto licenciado bajo la Licencia MIT.

plate](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
