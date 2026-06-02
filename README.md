# PawCode — TP2 Frontend - Equipo Nº 5 - N.Elías, M.Klaus, L.Millicay

> LINK VERCEL

---

## Descripción

PawCode es una Single Page Application (SPA) desarrollada con React como evolución del Trabajo Práctico 1 (HTML/CSS/JS). La aplicación funciona como un dashboard interactivo que presenta al equipo de desarrollo, con perfiles individuales, consumo de APIs externas, galería de imágenes y explorador de datos dinámicos. Implementa una arquitectura de componentes con React Router, animaciones de entrada, diseño responsive y buenas prácticas de organización y trabajo colaborativo.

---

## Integrantes

| Nombre | GitHub |
|---|---|
| Nidia Elías | [@nidia-elias](https://github.com/nidia-elias) |
| Maitén Klaus | [@MaiKlaus](https://github.com/MaiKlaus) |
| Lourdes Millicay | [@lourdes-millicay](https://github.com/lourdes-millicay) |

---

## Tecnologías Utilizadas

- **React** — biblioteca principal para la construcción de la UI
- **Vite** — entorno de desarrollo y bundler
- **React Router DOM v6** — navegación entre páginas (SPA)
- **JavaScript** — lógica dinámica y consumo de APIs
- **HTML5** — estructura semántica
- **CSS** — estilos, animaciones y diseño responsive
- **Google Fonts** — tipografía Poppins
- **JSONPlaceholder API** — API pública para el módulo de datos externos
- **Picsum Photos** — imágenes para la galería
- **Git + GitHub** — control de versiones y trabajo colaborativo
- **Vercel** — deploy y hosting

---

## Estructura de Archivos

```

```

---

## Guía de Estilos

### Paleta de Colores

| Nombre | Hex | Uso |
|---|---|---|
| Fondo principal | `#f0f2f5` | Background general |
| Azul principal | `#3498db` | Botones, links, acentos |
| Azul oscuro | `#2c3e50` | Sidebar, títulos |
| Blanco | `#ffffff` | Cards y contenedores |
| Texto principal | `#333333` | Texto general |
| Gris claro | `#f8fafc` | Fondos secundarios |

### Tipografías

| Fuente | Uso | Link |
|---|---|---|
| **Poppins** | Principal — títulos y textos | [Google Fonts](https://fonts.google.com/specimen/Poppins) |
| **Segoe UI / Roboto** | Secundaria — fallback | Sistema |

### Iconografía
- Emojis nativos para tech stack e íconos de navegación
- Sin dependencia de librerías externas de íconos

---

## ⚙️ JavaScript / React — Funciones Dinámicas

### 1. Perfil Individual dinámico con `useParams`
Un solo componente `ProfilePage.jsx` maneja los perfiles de todas las integrantes. Lee el `:id` de la URL y busca los datos correspondientes en `integrantes.js`.

```jsx
const { id } = useParams();
const perfil = integrantes.find((p) => p.id === id);
```

### 2. Barras de progreso animadas
Las barras arrancan en `0%` y se animan al valor real al montar el componente, usando `useState` + `setTimeout` + transición CSS.

```jsx
const [animado, setAnimado] = useState(false);
useEffect(() => {
  const timer = setTimeout(() => setAnimado(true), 300);
  return () => clearTimeout(timer);
}, [id]);
```

### 3. Carrusel de proyectos manual
Navegación entre proyectos con índice controlado por `useState`, con lógica circular.

```jsx
const siguienteSlide = () =>
  setSlideActivo((prev) => (prev + 1) % perfil.proyectos.length);
```

### 4. API externa con estados de carga y error
Fetch asíncrono a JSONPlaceholder con tres estados: cargando, error y datos listos. Se re-ejecuta automáticamente al cambiar de página.

```jsx
useEffect(() => {
  const fetchPosts = async () => {
    setCargando(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${inicio}&_limit=5`);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      setPosts(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };
  fetchPosts();
}, [paginaActual]);
```

### 5. Galería con Lightbox y handler de teclado
Grid de imágenes con filtros por categoría. Al hacer clic abre un lightbox con navegación por flechas y cierre con tecla ESC.

```jsx
useEffect(() => {
  if (lightboxIndex === null) return;
  const handleKeyDown = (e) => {
    if (e.key === "Escape")     cerrarLightbox();
    if (e.key === "ArrowLeft")  irAnterior();
    if (e.key === "ArrowRight") irSiguiente();
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [lightboxIndex]);
```

### Componentes clave

| Componente | Descripción |
|---|---|
| `App.jsx` | Router principal, Layout y Sidebar |
| `ProfilePage.jsx` | Perfil dinámico con barras, carrusel y tech stack |
| `ApiPage.jsx` | Fetch asíncrono con paginación |
| `GaleriaPage.jsx` | Grid con lightbox y filtros |
| `integrantes.js` | Fuente central de datos del equipo |



---

## Enlace al Proyecto Desplegado

> LINK VERCEL

---

## Evolución del Proyecto

### TP1 → TP2: Migración de HTML/JS a React


---
### Cambios y mejoras realizadas


---
