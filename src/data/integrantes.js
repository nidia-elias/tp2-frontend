import fotoLourdes   from "../assets/avatares/lourdes.jpeg";
import fotoMaiten  from "../assets/avatares/maiten.png";
import fotoNidia from "../assets/avatares/nidia.jpg";


export const integrantes = [
  {
    id: "lourdes",
    nombre: "Lourdes",
    rol: "Fullstack Developer",
    ubicacion: "Neuquén, Argentina",
    bio: "Apasionada por crear interfaces accesibles y bien diseñadas.",
    avatar: fotoLourdes,
    skills: [
      { nombre: "HTML",      porcentaje: 85 },
      { nombre: "JavaScript", porcentaje: 78 },
      { nombre: "CSS",        porcentaje: 90 },
      { nombre: "Git",        porcentaje: 70 },
      { nombre: "Figma",      porcentaje: 60 },
    ],
    techStack: [
      { nombre: "HTML5",      icono: "🧱" },
      { nombre: "JavaScript", icono: "🟨" },
      { nombre: "CSS",       icono: "🎨" },
      { nombre: "Git",        icono: "🔀" },
      { nombre: "Figma",      icono: "🖼️" },
    ],
    redes: [
      { nombre: "GitHub",   url: "https://github.com/",   color: "#24292e" },
      { nombre: "LinkedIn", url: "https://linkedin.com/", color: "#0077b5" },
    ],
    peliculas: [
      { titulo: "Mamma mia",     genero: "Musical", anio: 2008 },
      { titulo: "Thor: Ragnarok",       genero: "Superhéroes",           anio: 2017 },
      { titulo: "Life of Pi",    genero: "Drama, aventura",       anio: 2012 },
    ],
  },
  {
    id: "maiten",
    nombre: "Maitén",
    rol: "Fullstack Developer",
    ubicacion: "Quilmes, Argentina",
    bio: "Me gusta tanto el frontend como el backend. Fanática de Node.js.",
    avatar: fotoMaiten,
    skills: [
      { nombre: "Node.js",    porcentaje: 88 },
      { nombre: "React",      porcentaje: 75 },
      { nombre: "JavaScript",    porcentaje: 80 },
      { nombre: "Git",        porcentaje: 85 },
      { nombre: "HTML",      porcentaje: 88 },
    ],
    techStack: [
      { nombre: "Node.js",  icono: "🟩" },
      { nombre: "React",    icono: "⚛️" },
      { nombre: "JavaScript", icono: "🟨" },
      { nombre: "Git",      icono: "🔀" },
      { nombre: "HTML5",      icono: "🧱" },
    ],
    redes: [
      { nombre: "GitHub",   url: "https://github.com/MaiKlaus",   color: "#24292e" },
      { nombre: "LinkedIn", url: "https://linkedin.com/", color: "#0077b5" },
    ],
    peliculas: [
      { titulo: "Shrek",     genero: "Animación", anio: 2001 },
      { titulo: "Las locuras del emperador",       genero: "Animación",           anio: 2000 },
      { titulo: "Elementos",    genero: "Animación",       anio: 2023 },
    ],
  },
  {
    id: "nidia",
    nombre: "Nidia",
    rol: "Fullstack Developer",
    ubicacion: "Mar de Ajó, Argentina",
    bio: "Diseño experiencias digitales centradas en el usuario.",
    avatar: fotoNidia,
    skills: [
      { nombre: "Figma",      porcentaje: 95 },
      { nombre: "CSS",        porcentaje: 82 },
      { nombre: "React",      porcentaje: 65 },
      { nombre: "HTML",       porcentaje: 80 },
      { nombre: "Trabajo en equipo", porcentaje: 100 },
    ],
    techStack: [
      { nombre: "Figma",       icono: "🖼️" },
      { nombre: "CSS3",        icono: "🎨" },
      { nombre: "HTML5",       icono: "🧱" },
      { nombre: "React",       icono: "⚛️" },
      { nombre: "Trabajo en equipo", icono: "✏️" },
    ],
    redes: [
      { nombre: "GitHub",   url: "https://github.com/nidia-elias",   color: "#24292e" },
      { nombre: "LinkedIn", url: "https://linkedin.com/", color: "#0077b5" },
    ],
    peliculas: [
      { titulo: "Volver al futuro",     genero: "Ciencia ficción", anio: 1985 },
      { titulo: "El origen",       genero: "Drama",           anio: 2010 },
      { titulo: "Harry Potter",    genero: "Animación",       anio: 2001 },
    ],
  },
];