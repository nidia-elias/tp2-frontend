import { useState, useEffect, useCallback } from "react";
import "./GaleriaPage.css";

const IMAGENES = [
  { id: 1,  url: "https://picsum.photos/seed/arch1/800/600",   thumb: "https://picsum.photos/seed/arch1/400/300",  titulo: "Arquitectura Moderna",  categoria: "Arquitectura" },
  { id: 2,  url: "https://picsum.photos/seed/nat2/800/600",    thumb: "https://picsum.photos/seed/nat2/400/300",   titulo: "Paisaje Natural",       categoria: "Naturaleza"   },
  { id: 3,  url: "https://picsum.photos/seed/city3/800/600",   thumb: "https://picsum.photos/seed/city3/400/300",  titulo: "Ciudad de Noche",       categoria: "Ciudad"       },
  { id: 4,  url: "https://picsum.photos/seed/tech4/800/600",   thumb: "https://picsum.photos/seed/tech4/400/300",  titulo: "Tecnología",            categoria: "Tecnología"   },
  { id: 5,  url: "https://picsum.photos/seed/travel5/800/600", thumb: "https://picsum.photos/seed/travel5/400/300",titulo: "Viaje y Aventura",      categoria: "Viajes"       },
  { id: 6,  url: "https://picsum.photos/seed/art6/800/600",    thumb: "https://picsum.photos/seed/art6/400/300",   titulo: "Arte Urbano",           categoria: "Arte"         },
  { id: 7,  url: "https://picsum.photos/seed/ocean7/800/600",  thumb: "https://picsum.photos/seed/ocean7/400/300", titulo: "Océano Infinito",       categoria: "Naturaleza"   },
  { id: 8,  url: "https://picsum.photos/seed/food8/800/600",   thumb: "https://picsum.photos/seed/food8/400/300",  titulo: "Gastronomía",           categoria: "Fotografía"   },
  { id: 9,  url: "https://picsum.photos/seed/mount9/800/600",  thumb: "https://picsum.photos/seed/mount9/400/300", titulo: "Montañas",              categoria: "Naturaleza"   },
  { id: 10, url: "https://picsum.photos/seed/design10/800/600",thumb: "https://picsum.photos/seed/design10/400/300",titulo: "Diseño Minimalista",  categoria: "Arte"         },
  { id: 11, url: "https://picsum.photos/seed/street11/800/600",thumb: "https://picsum.photos/seed/street11/400/300",titulo: "Calle y Cultura",     categoria: "Ciudad"       },
  { id: 12, url: "https://picsum.photos/seed/forest12/800/600",thumb: "https://picsum.photos/seed/forest12/400/300",titulo: "Bosque Profundo",     categoria: "Naturaleza"   },
];

// Categorías únicas para los filtros
const CATEGORIAS = ["Todas", ...new Set(IMAGENES.map((img) => img.categoria))];

export default function GaleriaPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const imagenesFiltradas =
    categoriaActiva === "Todas"
      ? IMAGENES
      : IMAGENES.filter((img) => img.categoria === categoriaActiva);

  //  ABRIR / CERRAR LIGHTBOX 
  const abrirLightbox = (index) => setLightboxIndex(index);
  const cerrarLightbox = () => setLightboxIndex(null);

  //  NAVEGACIÓN DENTRO DEL LIGHTBOX 
  const irAnterior = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === 0 ? imagenesFiltradas.length - 1 : prev - 1
    );
  }, [imagenesFiltradas.length]);

  const irSiguiente = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === imagenesFiltradas.length - 1 ? 0 : prev + 1
    );
  }, [imagenesFiltradas.length]);

  //  HANDLER DE TECLADO (ESC y flechas) 
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape")     cerrarLightbox();
      if (e.key === "ArrowLeft")  irAnterior();
      if (e.key === "ArrowRight") irSiguiente();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, irAnterior, irSiguiente]);

  return (
    <div className="galeria-page">

      {/*  ENCABEZADO  */}
      <div className="galeria-header">
        <h1 className="galeria-titulo">Galería de Imágenes</h1>
        <p className="galeria-subtitulo">
          Hacé clic en una imagen para verla en detalle. Navegá con las flechas o el teclado.
        </p>
      </div>

      {/*  FILTROS POR CATEGORÍA  */}
      <div className="filtros">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? "activo" : ""}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/*  GRID DE IMÁGENES  */}
      <div className="imagen-grid">
        {imagenesFiltradas.map((img, index) => (
          <div
            key={img.id}
            className="imagen-item"
            onClick={() => abrirLightbox(index)}
          >
            <img src={img.thumb} alt={img.titulo} loading="lazy" />
            <div className="imagen-overlay">
              <span className="imagen-titulo">{img.titulo}</span>
              <span className="imagen-categoria">{img.categoria}</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={cerrarLightbox}>

          <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>

            {/* Botón cerrar */}
            <button className="lightbox-cerrar" onClick={cerrarLightbox}>
              ✕
            </button>

            {/* Botón anterior */}
            <button className="lightbox-nav lightbox-anterior" onClick={irAnterior}>
              ‹
            </button>

            {/* Imagen principal */}
            <img
              src={imagenesFiltradas[lightboxIndex].url}
              alt={imagenesFiltradas[lightboxIndex].titulo}
              className="lightbox-imagen"
            />

            {/* Botón siguiente */}
            <button className="lightbox-nav lightbox-siguiente" onClick={irSiguiente}>
              ›
            </button>

            {/* Info de la imagen */}
            <div className="lightbox-info">
              <span className="lightbox-titulo">
                {imagenesFiltradas[lightboxIndex].titulo}
              </span>
              <span className="lightbox-contador">
                {lightboxIndex + 1} / {imagenesFiltradas.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}